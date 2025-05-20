/** @format */

import { Module } from "@nestjs/common";
import { TransportService } from "./transport.service";
import { TransportController } from "./transport.controller";
import { UserModule } from "../user/user.module";

@Module({
    imports: [UserModule],
    controllers: [TransportController],
    providers: [TransportService],
})
export class TransportModule {}
