/** @format */

import { Injectable, Logger } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailService {
    private readonly logger = new Logger(EmailService.name);

    constructor(private readonly mailerService: MailerService) {}

    async sendVerificationCode(email: string, code: string) {
        console.log("Sending email to:", email);
        console.log("Verification code:", code);

        try {
            await this.mailerService.sendMail({
                to: email,
                subject: "Код подтверждения от Tranzit",
                html: this.generateHtmlTemplate(code),
            });

            this.logger.log(`Код отправлен на ${email}`);
        } catch (error) {
            this.logger.error(`Ошибка отправки письма на ${email}`, error);
            throw new Error(
                "Не удалось отправить письмо с кодом подтверждения"
            );
        }
    }

    private generateHtmlTemplate(code: string): string {
        return `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #333;">Подтверждение Email</h2>
            <p>Ваш код подтверждения:</p>
            <div style="font-size: 32px; font-weight: bold; margin: 10px 0;">${code}</div>
            <p style="color: #555;">Срок действия: <strong>5 минут</strong></p>
            <hr />
            <p style="font-size: 12px; color: #aaa;">Если вы не запрашивали код, просто проигнорируйте это письмо.</p>
        </div>
        `;
    }
}
