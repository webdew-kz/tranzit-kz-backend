/** @format */

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { fetchRates } from "./utils/fetchRates";
import { Rate } from "./types/currency.interface";
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class CurrencyService {
    constructor(private readonly prisma: PrismaService) {}

    async update(): Promise<void> {
        const rates: Rate[] = await fetchRates();

        if (rates.length > 0) {
            await this.prisma.$transaction(
                rates.map(({ title, rate }) =>
                    this.prisma.currencyRate.upsert({
                        where: { title },
                        update: { rate },
                        create: {
                            title,
                            rate,
                        },
                    })
                )
            );
        }
    }

    async getAll(): Promise<Rate[]> {
        const rates = await this.prisma.currencyRate.findMany();

        return rates.map(({ title, rate }) => ({
            title,
            rate,
        }));
    }

    @Cron(CronExpression.EVERY_DAY_AT_3AM)
    async handleCron(): Promise<void> {
        await this.update();
    }
}
