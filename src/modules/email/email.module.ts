/** @format */

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { EmailService } from "./email.service";
import { PugAdapter } from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import { join } from "path";

@Module({
    imports: [
        ConfigModule,
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService], // 👈 обязательно
            useFactory: (config: ConfigService) => ({
                transport: {
                    host: "smtp.gmail.com",
                    port: 587,
                    // secure: true,
                    auth: {
                        user: config.get("GOOGLE_SMTP_LOGIN"),
                        pass: config.get("GOOGLE_SMTP_PASSWORD"),
                    },
                },
                defaults: {
                    from: `"Tranzit.kz" <${config.get("GOOGLE_SMTP_LOGIN")}>`,
                },
                template: {
                    dir: join(
                        process.cwd(),
                        "dist",
                        "modules",
                        "email",
                        "templates"
                    ),
                    adapter: new PugAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        }),
    ],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule {}
