/** @format */

import { Injectable, Logger } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendVerificationCode(email: string, code: string) {
        try {
            await this.mailerService.sendMail({
                to: email,
                subject: "Подтвердите почту на Tranzit.kz",
                template: "welcome", // путь относительный к dir в email.module.ts
                context: {
                    code,
                },
            });
        } catch (error) {
            console.error("Ошибка при отправке email:", error);
            throw error;
        }

        // try {
        //     await this.mailerService.sendMail({
        //         to: email,
        //         subject: "Код подтверждения от Tranzit",
        //         html: this.generateHtmlTemplate(code),
        //     });

        //     this.logger.log(`Код отправлен на ${email}`);
        // } catch (error) {
        //     this.logger.error(`Ошибка отправки письма на ${email}`, error);
        //     throw new Error(
        //         "Не удалось отправить письмо с кодом подтверждения"
        //     );
        // }
    }
}
