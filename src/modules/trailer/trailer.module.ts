/** @format */

import { Module } from "@nestjs/common";
import { TrailerService } from "./trailer.service";
import { TrailerController } from "./trailer.controller";
import { UserModule } from "../user/user.module";

@Module({
    imports: [UserModule],
    controllers: [TrailerController],
    providers: [TrailerService],
})
export class TrailerModule {}
