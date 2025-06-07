/** @format */

import {
    Body,
    Controller,
    Post,
    Param,
    Get,
    Query,
    UseInterceptors,
    UploadedFiles,
} from "@nestjs/common";
import { TrailerService } from "./trailer.service";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { CreateTrailerDto } from "./dto/create-trailer.dto";
import { FilterTrailerDto } from "./dto/filter-trailer.dto";
import { Auth } from "../auth/decorators/auth.decorator";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";
import { deleteFile } from "src/utils/delete-file";
import { UpdateTrailerDto } from "./dto/update-trailer.dto";

sharp.cache(false);

@Auth()
@Controller("trailer")
export class TrailerController {
    constructor(private readonly trailerService: TrailerService) {}

    @Get("find-by-id/:id")
    async findById(@Param("id") id: string) {
        return this.trailerService.findById(id);
    }

    @Get("find-all-active-by-user-id")
    async findAllActiveByUserId(@CurrentUser("id") userId: string) {
        return this.trailerService.findAllActiveByUserId(userId);
    }

    @Get("find-all-archived-by-user-id")
    async findAllArchivedByUserId(@CurrentUser("id") userId: string) {
        return this.trailerService.findAllArchivedByUserId(userId);
    }

    @Get("find-all")
    async findAll(@Query("page") page: string) {
        const currentPage = Number(page) || 1;
        return this.trailerService.findAll(currentPage);
    }

    @Get("wishlist")
    async getWishlist(@CurrentUser("id") userId: string) {
        return this.trailerService.getWishlist(userId);
    }

    @Post("find-by-filter")
    async findByFilter(@Body() dto: FilterTrailerDto) {
        return this.trailerService.findByFilter(dto);
    }

    @Post("create")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(process.cwd(), "uploads", "trailers");
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    cb(null, dir);
                },
                filename: (req, file, cb) => {
                    const uniqueSuffix =
                        Date.now() + "-" + Math.round(Math.random() * 1e9);
                    const ext = path.extname(file.originalname);
                    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
                },
            }),
        })
    )
    async create(
        @UploadedFiles() files: { photos?: Express.Multer.File[] },
        @Body() dto: any,
        @CurrentUser("id") userId: string
    ) {
        return this.trailerService.create(dto, userId, files);
    }

    @Post("create-copy")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(process.cwd(), "uploads", "trailers");
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    cb(null, dir);
                },
                filename: (req, file, cb) => {
                    const uniqueSuffix =
                        Date.now() + "-" + Math.round(Math.random() * 1e9);
                    const ext = path.extname(file.originalname);
                    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
                },
            }),
        })
    )
    async createCopy(
        @UploadedFiles() files: { photos?: Express.Multer.File[] },
        @Body() dto: CreateTrailerDto,
        @CurrentUser("id") userId: string
    ) {
        return this.trailerService.createCopy(dto, userId, files);
    }

    @Post("update/:id")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(process.cwd(), "uploads", "trailers");
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    cb(null, dir);
                },
                filename: (req, file, cb) => {
                    const uniqueSuffix =
                        Date.now() + "-" + Math.round(Math.random() * 1e9);
                    const ext = path.extname(file.originalname);
                    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
                },
            }),
        })
    )
    async update(
        @UploadedFiles() files: { photos?: Express.Multer.File[] },
        @Param("id") id: string,
        @Body() dto: UpdateTrailerDto
    ) {
        return this.trailerService.update(dto, id, files);
    }

    @Post("delete/:id")
    async delete(@Param("id") id: string) {
        return this.trailerService.delete(id);
    }

    @Post("archivate/:id")
    async archivate(@Param("id") id: string) {
        return this.trailerService.archivate(id);
    }

    @Post("activate/:id")
    async activate(@Param("id") id: string) {
        console.log("Activating trailer with ID:", id);

        return this.trailerService.activate(id);
    }

    @Post("activate-many")
    async activateMany(@Body("ids") ids: string[]) {
        return this.trailerService.activateMany(ids);
    }

    @Post("archivate-many")
    async archivateMany(@Body("ids") ids: string[]) {
        return this.trailerService.archivateMany(ids);
    }

    @Post("remove-many")
    async removeMany(@Body("ids") ids: string[]) {
        return this.trailerService.removeMany(ids);
    }

    @Post("add-view/:id")
    async addView(@Param("id") id: string) {
        return this.trailerService.addView(id);
    }

    @Post("add-to-wishlist/:id")
    async addToWishlist(
        @CurrentUser("id") userId: string,
        @Param("id") trailerId: string
    ) {
        return this.trailerService.addToWishlist(userId, trailerId);
    }

    @Post("remove-from-wishlist/:id")
    async removeFromWishlist(
        @CurrentUser("id") userId: string,
        @Param("id") trailerId: string
    ) {
        return this.trailerService.removeFromWishlist(userId, trailerId);
    }

    @Post("remove-all-from-wish-list")
    async removeAllFromWishlist(@CurrentUser("id") userId: string) {
        return this.trailerService.removeAllFromWishlist(userId);
    }

    @Post("is-in-wishlist")
    async isInWishlist(
        @CurrentUser("id") userId: string,
        @Body("trailerId") trailerId: string
    ) {
        return this.trailerService.isInWishlist(trailerId, userId);
    }
}
