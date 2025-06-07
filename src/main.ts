/** @format */

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const config = app.get(ConfigService);

    app.use(cookieParser());

    app.enableCors({
        // origin: config.get<string>("CLIENT_URL"),
        origin: true,
        credentials: true,
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        })
    );

    app.useStaticAssets(join(__dirname, "..", "uploads"), {
        prefix: "/uploads/",
    });

    await app.listen(config.getOrThrow<string>("SERVER_PORT") ?? 3000, () => {
        console.log(
            `Server is running on port ${config.getOrThrow<string>("SERVER_PORT")}`
        );
    });
}
void bootstrap();
