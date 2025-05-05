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
import { CargoService } from "./cargo.service";
import { CreateCargoDto } from "./dto/create-cargo.dto";
import { UpdateCargoDto } from "./dto/update-cargo.dto";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { Auth } from "../auth/decorators/auth.decorator";
import { SearchCargoDto } from "./dto/search-cargo.dto";

@Auth()
@Controller("cargo")
export class CargoController {
    constructor(private readonly cargoService: CargoService) {}

    @Get()
    async findAll(@Query("page") page: string) {
        const currentPage = Number(page) || 1;
        return this.cargoService.findAll(currentPage);
    }

    @Get(":id")
    @HttpCode(200)
    findById(@Param("id") id: string) {
        return this.cargoService.findById(id);
    }

    @Patch(":id")
    @HttpCode(200)
    update(
        @Param("id") cargoId: string,
        @CurrentUser("id") userId: string,
        @Body() dto: UpdateCargoDto
    ) {
        return this.cargoService.update(cargoId, userId, dto);
    }

    @Delete(":id")
    @HttpCode(200)
    remove(@Param("id") id: string) {
        return this.cargoService.remove(id);
    }

    @Post("find-by-user-id")
    @HttpCode(200)
    findAllByUserId(
        @CurrentUser("id") id: string,
        @Body() { page }: { page: number }
    ) {
        return this.cargoService.findAllByUserId(id, page);
    }

    @Get("find-archive-by-user-id/:userid")
    @HttpCode(200)
    findArchiveAllByUserId(@Param("userid") id: string) {
        return this.cargoService.findArchiveAllByUserId(id);
    }

    @Get("active/cargos")
    @HttpCode(200)
    findActiveByUserId(@CurrentUser("id") id: string) {
        return this.cargoService.findActiveByUserId(id);
    }

    @Get("archive/cargos")
    @HttpCode(200)
    findArchiveByUserId(@CurrentUser("id") id: string) {
        return this.cargoService.findArchiveByUserId(id);
    }

    @Post("create")
    @HttpCode(200)
    create(@CurrentUser("id") id: string, @Body() dto: CreateCargoDto) {
        return this.cargoService.create(dto, id);
    }

    @Post("archivate")
    @HttpCode(200)
    archivate(@Body() { id }: { id: string }) {
        return this.cargoService.archivate({ id });
    }

    @Post("activate")
    @HttpCode(200)
    activate(@Body() { id }: { id: string }) {
        return this.cargoService.activate({ id });
    }

    @Post("remove-many")
    @HttpCode(200)
    async removeMany(@Body() { ids }: { ids: string[] }) {
        return await this.cargoService.removeMany(ids);
    }

    @Post("archivate-many")
    @HttpCode(200)
    async archivateMany(@Body() { ids }: { ids: string[] }) {
        return await this.cargoService.archivateMany(ids);
    }
    @Post("activate-many")
    @HttpCode(200)
    async activateMany(@Body() { ids }: { ids: string[] }) {
        return await this.cargoService.activateMany(ids);
    }

    @Post("find-many-by-filter")
    @HttpCode(200)
    async findManyByFilter(@Body() dto: SearchCargoDto) {
        return await this.cargoService.findManyByFilter(dto);
    }

    @Post("add-view")
    @HttpCode(200)
    async addView(@Body() { id }: { id: string }) {
        return await this.cargoService.addView(id);
    }
}
