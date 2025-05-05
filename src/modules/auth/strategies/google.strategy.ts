/** @format */

// auth/strategies/google.strategy.ts
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
    constructor(config: ConfigService) {
        super({
            clientID: config.getOrThrow("GOOGLE_CLIENT_ID"),
            clientSecret: config.getOrThrow("GOOGLE_CLIENT_SECRET"),
            callbackURL: config.getOrThrow("GOOGLE_CALLBACK_URL"),
            scope: ["email", "profile"],
        });
    }

    validate(
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: VerifyCallback
    ) {
        const { displayName, emails, photos } = profile;

        const user = {
            email: emails?.[0]?.value,
            name: displayName,
            avatar: photos?.[0]?.value,
        };

        done(null, user); // user → попадёт в req.user
    }
}
