/** @format */

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = app.get(ConfigService);

    app.use(cookieParser());

    app.enableCors({
        origin: "http://localhost:3000", //config.getOrThrow<string>("CLIENT_URL"),
        credentials: true,
        exposedHeaders: ["set-cookie"],
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        })
    );

    await app.listen(config.getOrThrow<string>("SERVER_PORT") ?? 3000, () => {
        console.log(
            `Server is running on port ${config.getOrThrow<string>("SERVER_PORT")}`
        );
    });
}
void bootstrap();
