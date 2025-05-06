/** @format */

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { EmailService } from "./email.service";
import { join } from "path";

@Module({
    imports: [
        ConfigModule, // обязательно
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                transport: {
                    host: "live.smtp.mailtrap.io",
                    port: 587,
                    secure: false, // Mailtrap на 587 не требует SSL
                    auth: {
                        user: config.getOrThrow("MAILTRAP_USER"),
                        pass: config.getOrThrow("MAILTRAP_PASS"),
                    },
                },
                defaults: {
                    from: `"Tranzit" <noreply@tranzit.kz>`, // или любой валидный email
                },
            }),
        }),
    ],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule {}
