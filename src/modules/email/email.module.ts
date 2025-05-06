/** @format */

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { EmailService } from "./email.service";

@Module({
    imports: [
        ConfigModule,
        MailerModule.forRootAsync({
            useFactory: () => ({
                transport: {
                    host: "live.smtp.mailtrap.io",
                    port: 587,
                    auth: {
                        user: "api",
                        pass: "677da084c2403bbc6797f6ecd3cec408",
                    },
                },
            }),
        }),
    ],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule {}
