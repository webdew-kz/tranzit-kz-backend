/** @format */

import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { CargoModule } from "./modules/cargo/cargo.module";
import { TransportModule } from "./modules/transport/transport.module";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { EmailModule } from "./modules/email/email.module";
import { CurrencyModule } from "./modules/currency/currency.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`.env.${process.env.NODE_ENV}`, ".env"],
        }),
        UserModule,
        AuthModule,
        CargoModule,
        TransportModule,
        EmailModule,
        CurrencyModule,
    ],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {}
