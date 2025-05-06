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
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Подтверждение Email</h2>
                <p>Ваш код подтверждения:</p>
                <p style="font-size: 24px; font-weight: bold;">${code}</p>
                <p>Срок действия: 5 минут</p>
            </div>
        `,
        });
    }

    generateCode(): string {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
}
