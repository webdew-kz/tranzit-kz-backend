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
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: config.getOrThrow<string>("GOOGLE_SMTP_LOGIN"),
                        pass: config.getOrThrow<string>("GOOGLE_SMTP_PASSWORD"),
                    },
                },
                defaults: {
                    from: `"Tranzit" <${config.getOrThrow<string>("GOOGLE_SMTP_LOGIN")}>`,
                },
                template: {
                    dir: join(__dirname, "..", "..", "..", "templates"),
                    adapter: new HandlebarsAdapter(),
                    options: { strict: true },
                },
            }),
        }),
    ],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule {}
