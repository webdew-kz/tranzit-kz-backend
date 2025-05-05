/** @format */

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { UserService } from "src/modules/user/user.service";

export interface JwtPayload {
    id: string;
    role: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        config: ConfigService,
        private readonly userService: UserService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.getOrThrow<string>("JWT_SECRET"),
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.userService.findById(payload.id);

        if (!user) {
            throw new UnauthorizedException("Пользователь не найден");
        }

        return user;
    }
}
