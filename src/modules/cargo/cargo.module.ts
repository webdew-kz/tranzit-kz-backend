/** @format */

import { Module } from "@nestjs/common";
import { CargoService } from "./cargo.service";
import { CargoController } from "./cargo.controller";
import { UserModule } from "../user/user.module";

@Module({
    imports: [UserModule],
    controllers: [CargoController],
    providers: [CargoService],
})
export class CargoModule {}
