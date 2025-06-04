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
import { TruckService } from "./truck.service";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { CreateTruckDto } from "./dto/create-truck.dto";
import { FilterTruckDto } from "./dto/filter-truck.dto";
import { Auth } from "../auth/decorators/auth.decorator";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";
import { deleteFile } from "src/utils/delete-file";
import { UpdateTruckDto } from "./dto/update-truck.dto";

sharp.cache(false);

@Auth()
@Controller("truck")
export class TruckController {
    constructor(private readonly truckService: TruckService) {}

    @Get("find-by-id/:id")
    async findById(@Param("id") id: string) {
        return this.truckService.findById(id);
    }

    @Get("find-all-active-by-user-id")
    async findAllActiveByUserId(
        @CurrentUser("id") userId: string
        // @Query("page") page: string
    ) {
        // const currentPage = Number(page) || 1;
        return this.truckService.findAllActiveByUserId(userId);
    }

    @Get("find-all-archived-by-user-id")
    async findAllArchivedByUserId(
        @CurrentUser("id") userId: string
        // @Query("page") page: string
    ) {
        // const currentPage = Number(page) || 1;
        return this.truckService.findAllArchivedByUserId(userId);
    }

    @Get("find-all")
    async findAll(@Query("page") page: string) {
        const currentPage = Number(page) || 1;
        return this.truckService.findAll(currentPage);
    }

    @Get("wishlist")
    async getWishlist(@CurrentUser("id") userId: string) {
        return this.truckService.getWishlist(userId);
    }

    @Post("find-by-filter")
    async findByFilter(@Body() dto: FilterTruckDto) {
        return this.truckService.findByFilter(dto);
    }

    @Post("create")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    console.log("Current working dir:", process.cwd());

                    const dir = path.join(process.cwd(), "uploads", "trucks");
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
        @Body() dto: CreateTruckDto,
        @CurrentUser("id") userId: string
    ) {
        return this.truckService.create(dto, userId, files);
    }

    @Post("create-copy")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(process.cwd(), "uploads", "trucks");
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
        @Body() dto: CreateTruckDto,
        @CurrentUser("id") userId: string
    ) {
        return this.truckService.createCopy(dto, userId, files);
    }

    @Post("update/:id")
    @UseInterceptors(
        FileFieldsInterceptor([{ name: "photos", maxCount: 4 }], {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const dir = path.join(process.cwd(), "uploads", "trucks");
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
        @Body() dto: UpdateTruckDto
    ) {
        return this.truckService.update(dto, id, files);
    }

    @Post("delete/:id")
    async delete(@Param("id") id: string) {
        return this.truckService.delete(id);
    }

    @Post("archivate/:id")
    async archivate(@Param("id") id: string) {
        return this.truckService.archivate(id);
    }

    @Post("activate/:id")
    async activate(@Param("id") id: string) {
        console.log("Activating truck with ID:", id);

        return this.truckService.activate(id);
    }

    @Post("activate-many")
    async activateMany(@Body("ids") ids: string[]) {
        return this.truckService.activateMany(ids);
    }

    @Post("archivate-many")
    async archivateMany(@Body("ids") ids: string[]) {
        return this.truckService.archivateMany(ids);
    }

    @Post("remove-many")
    async removeMany(@Body("ids") ids: string[]) {
        return this.truckService.removeMany(ids);
    }

    @Post("add-view/:id")
    async addView(@Param("id") id: string) {
        return this.truckService.addView(id);
    }

    @Post("add-to-wishlist/:id")
    async addToWishlist(
        @CurrentUser("id") userId: string,
        @Param("id") truckId: string
    ) {
        return this.truckService.addToWishlist(userId, truckId);
    }

    @Post("remove-from-wishlist/:id")
    async removeFromWishlist(
        @CurrentUser("id") userId: string,
        @Param("id") truckId: string
    ) {
        return this.truckService.removeFromWishlist(userId, truckId);
    }

    @Post("remove-all-from-wish-list")
    async removeAllFromWishlist(@CurrentUser("id") userId: string) {
        return this.truckService.removeAllFromWishlist(userId);
    }

    @Post("is-in-wishlist")
    async isInWishlist(
        @CurrentUser("id") userId: string,
        @Body("truckId") truckId: string
    ) {
        return this.truckService.isInWishlist(truckId, userId);
    }
}
