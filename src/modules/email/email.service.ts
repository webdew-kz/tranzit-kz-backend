/** @format */

// email.service.ts
import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendVerificationCode(email: string, code: string) {
        await this.mailerService.sendMail({
            to: email,
            subject: "Подтверждение Email",
            template: "confirmation",
            context: {
                code,
            },
        });
    }

    generateCode(): string {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
}
