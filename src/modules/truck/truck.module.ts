/** @format */

import { Module } from "@nestjs/common";
import { TruckService } from "./truck.service";
import { TruckController } from "./truck.controller";
import { UserModule } from "../user/user.module";

@Module({
    imports: [UserModule],
    controllers: [TruckController],
    providers: [TruckService],
})
export class TruckModule {}
