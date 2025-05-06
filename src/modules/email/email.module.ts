/** @format */

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { EmailService } from "./email.service";

@Module({
    imports: [
        ConfigModule,
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                transport: {
                    host: "live.smtp.mailtrap.io",
                    port: 2525,
                    secure: false,
                    auth: {
                        user: config.getOrThrow("MAILTRAP_USER"),
                        pass: config.getOrThrow("MAILTRAP_PASS"),
                    },
                },
                defaults: {
                    from: '"Tranzit" <noreply@itranzit.kz>',
                },
            }),
        }),
    ],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule {}
