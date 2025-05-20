/** @format */

import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    Query,
} from "@nestjs/common";
import { TransportService } from "./transport.service";
import { CreateTransportDto } from "./dto/create-transport.dto";
import { UpdateTransportDto } from "./dto/update-transport.dto";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { Auth } from "../auth/decorators/auth.decorator";

@Auth()
@Controller("transport")
export class TransportController {
    constructor(private readonly transportService: TransportService) {}

    @Get()
    async findAll(@Query("page") page: string) {
        const currentPage = Number(page) || 1;
        return this.transportService.findAll(currentPage);
    }

    @Get(":id")
    @HttpCode(200)
    findById(@Param("id") id: string) {
        return this.transportService.findById(id);
    }

    @Get("find-archive-by-user-id/:userid")
    @HttpCode(200)
    findArchiveAllByUserId(@Param("userid") id: string) {
        return this.transportService.findArchiveAllByUserId(id);
    }

    @Get("active/transports")
    @HttpCode(200)
    findActiveByUserId(@CurrentUser("id") id: string) {
        return this.transportService.findActiveByUserId(id);
    }

    @Get("archive/transports")
    @HttpCode(200)
    findArchiveByUserId(@CurrentUser("id") id: string) {
        return this.transportService.findArchiveByUserId(id);
    }

    @Patch(":id")
    @HttpCode(200)
    update(
        @Param("id") transportId: string,
        @CurrentUser("id") userId: string,
        @Body() dto: UpdateTransportDto
    ) {
        return this.transportService.update(transportId, userId, dto);
    }

    @Delete(":id")
    @HttpCode(200)
    remove(@Param("id") id: string) {
        return this.transportService.remove(id);
    }

    @Post("create")
    @HttpCode(200)
    create(@CurrentUser("id") id: string, @Body() dto: CreateTransportDto) {
        return this.transportService.create(dto, id);
    }

    @Post("archivate")
    @HttpCode(200)
    archivate(@Body() { id }: { id: string }) {
        return this.transportService.archivate({ id });
    }

    @Post("archivate-many")
    @HttpCode(200)
    async archivateMany(@Body() { ids }: { ids: string[] }) {
        return await this.transportService.archivateMany(ids);
    }

    @Post("activate")
    @HttpCode(200)
    activate(@Body() { id }: { id: string }) {
        return this.transportService.activate({ id });
    }

    @Post("activate-many")
    @HttpCode(200)
    async activateMany(@Body() { ids }: { ids: string[] }) {
        return await this.transportService.activateMany(ids);
    }

    @Post("remove-many")
    @HttpCode(200)
    async removeMany(@Body() { ids }: { ids: string[] }) {
        return await this.transportService.removeMany(ids);
    }

    @Post("find-by-user-id")
    @HttpCode(200)
    findAllByUserId(
        @CurrentUser("id") id: string,
        @Body() { page }: { page: number }
    ) {
        return this.transportService.findAllByUserId(id, page);
    }

    @Post("find-many-by-filter")
    @HttpCode(200)
    async findManyByFilter(@Body() dto: UpdateTransportDto) {
        return await this.transportService.findManyByFilter(dto);
    }

    @Post("add-view")
    @HttpCode(200)
    async addView(@Body() { id }: { id: string }) {
        return await this.transportService.addView(id);
    }

    @Post("add-to-wishlist")
    @HttpCode(200)
    async addToWishlist(
        @CurrentUser("id") userId: string,
        @Body() { transportId }: { transportId: string }
    ) {
        return await this.transportService.addToWishlist(userId, transportId);
    }

    @Post("remove-from-wishlist")
    @HttpCode(200)
    async removeFromWishlist(
        @CurrentUser("id") userId: string,
        @Body() { transportId }: { transportId: string }
    ) {
        return await this.transportService.removeFromWishlist(
            userId,
            transportId
        );
    }

    @Post("remove-all-from-wishlist")
    @HttpCode(200)
    async removeAllFromWishlist(@CurrentUser("id") userId: string) {
        return await this.transportService.removeAllFromWishlist(userId);
    }

    @Post("wishlist")
    @HttpCode(200)
    async getWishlist(@CurrentUser("id") userId: string) {
        return await this.transportService.getWishList(userId);
    }

    @Post("is-in-wishlist")
    @HttpCode(200)
    async isInWishlist(
        @CurrentUser("id") userId: string,
        @Body() transportId: string
    ) {
        return await this.transportService.isInWishlist(userId, transportId);
    }
}
