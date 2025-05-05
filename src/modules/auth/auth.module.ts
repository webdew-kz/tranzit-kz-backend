/** @format */

import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GoogleStrategy } from "./strategies/google.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { jwtConfig } from "src/config/jwt.config";
import { UserService } from "../user/user.service";
import { EmailModule } from "../email/email.module";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: jwtConfig,
        }),
        PassportModule,
        ConfigModule,
        UserModule,
        EmailModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, GoogleStrategy, JwtStrategy, UserService],
})
export class AuthModule {}
