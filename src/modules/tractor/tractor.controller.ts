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
import { TractorService } from "./tractor.service";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { CreateTractorDto } from "./dto/create-tractor.dto";
import { FilterTractorDto } from "./dto/filter-tractor.dto";
import { Auth } from "../auth/decorators/auth.decorator";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";
import { deleteFile } from "src/utils/delete-file";
import { UpdateTractorDto } from "./dto/update-tractor.dto";

sharp.cache(false);

@Auth()
@Controller("tractor")
export class TractorController {
    constructor(private readonly tractorService: TractorService) {}

    @Get("find-by-id/:id")
    async findById(@Param("id") id: string) {
        return this.tractorService.findById(id);
    }

    @Get("find-all-active-by-user-id")
    async findAllActiveByUserId(
        @CurrentUser("id") userId: string
        // @Query("page") page: string
    ) {
        // const currentPage = Number(page) || 1;
        return this.tractorService.findAllActiveByUserId(userId);
    }

    @Get("find-all-archived-by-user-id")
    async findAllArchivedByUserId(
        @CurrentUser("id") userId: string
        // @Query("page") page: string
    ) {
        // const currentPage = Number(page) || 1;
        return this.tractorService.findAllArchivedByUserId(userId);
    }

    @Get("find-all")
    async findAll(@Query("page") page: string) {
        const currentPage = Number(page) || 1;
        return this.tractorService.findAll(currentPage);
    }

    @Get("wishlist")
    async getWishlist(@CurrentUser("id") userId: string) {
        return this.tractorService.getWishlist(userId);
    }

    @Post("find-by-filter")
    async findByFilter(@Body() dto: FilterTractorDto) {
        return this.tractorService.findByFilter(dto);
    }

    @Post("create")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(process.cwd(), "uploads", "tractors");
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
        @Body() dto: CreateTractorDto,
        @CurrentUser("id") userId: string
    ) {
        return this.tractorService.create(dto, userId, files);
    }

    @Post("create-copy")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(process.cwd(), "uploads", "tractors");
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
        @Body() dto: CreateTractorDto,
        @CurrentUser("id") userId: string
    ) {
        return this.tractorService.createCopy(dto, userId, files);
    }

    @Post("update/:id")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(process.cwd(), "uploads", "tractors");
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
        @Body() dto: UpdateTractorDto
    ) {
        return this.tractorService.update(dto, id, files);
    }

    @Post("delete/:id")
    async delete(@Param("id") id: string) {
        return this.tractorService.delete(id);
    }

    @Post("archivate/:id")
    async archivate(@Param("id") id: string) {
        return this.tractorService.archivate(id);
    }

    @Post("activate/:id")
    async activate(@Param("id") id: string) {
        console.log("Activating tractor with ID:", id);

        return this.tractorService.activate(id);
    }

    @Post("activate-many")
    async activateMany(@Body("ids") ids: string[]) {
        return this.tractorService.activateMany(ids);
    }

    @Post("archivate-many")
    async archivateMany(@Body("ids") ids: string[]) {
        return this.tractorService.archivateMany(ids);
    }

    @Post("remove-many")
    async removeMany(@Body("ids") ids: string[]) {
        return this.tractorService.removeMany(ids);
    }

    @Post("add-view/:id")
    async addView(@Param("id") id: string) {
        return this.tractorService.addView(id);
    }

    @Post("add-to-wishlist/:id")
    async addToWishlist(
        @CurrentUser("id") userId: string,
        @Param("id") tractorId: string
    ) {
        return this.tractorService.addToWishlist(userId, tractorId);
    }

    @Post("remove-from-wishlist/:id")
    async removeFromWishlist(
        @CurrentUser("id") userId: string,
        @Param("id") tractorId: string
    ) {
        return this.tractorService.removeFromWishlist(userId, tractorId);
    }

    @Post("remove-all-from-wish-list")
    async removeAllFromWishlist(@CurrentUser("id") userId: string) {
        return this.tractorService.removeAllFromWishlist(userId);
    }

    @Post("is-in-wishlist")
    async isInWishlist(
        @CurrentUser("id") userId: string,
        @Body("tractorId") tractorId: string
    ) {
        return this.tractorService.isInWishlist(tractorId, userId);
    }
}
