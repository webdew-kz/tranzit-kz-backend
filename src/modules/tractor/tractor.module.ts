/** @format */

import { Module } from "@nestjs/common";
import { TractorService } from "./tractor.service";
import { TractorController } from "./tractor.controller";
import { UserModule } from "../user/user.module";

@Module({
    imports: [UserModule],
    controllers: [TractorController],
    providers: [TractorService],
})
export class TractorModule {}
