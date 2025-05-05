/** @format */

import { Controller, Get, Post } from "@nestjs/common";
import { CurrencyService } from "./currency.service";
import { Auth } from "../auth/decorators/auth.decorator";

@Auth()
@Controller("currency")
export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) {}

    @Get()
    async getAll() {
        return await this.currencyService.getAll();
    }

    @Post("update")
    async update() {
        return await this.currencyService.update();
    }
}
