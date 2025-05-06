/** @format */

import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { UserService } from "./user.service";
import {
    CreateUserWithEmailDto,
    CreateUserWithPhoneDto,
} from "./dto/create-user.dto";
import { Auth } from "../auth/decorators/auth.decorator";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "generated/prisma";
import { CurrentUser } from "src/decorators/current-user.decorator";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}
    // createUserWithPhone;
    // createUserWithEmail;
    // createAdmin;
    // findAll;
    // findById;
    // findByPhone;
    // findByEmail;
    // update;
    // remove;

    @Post("create-with-phone")
    createUserWithPhone(@Body() dto: CreateUserWithPhoneDto) {
        return this.userService.createUserWithPhone(dto);
    }

    @Post("create-with-email")
    createUserWithEmail(@Body() dto: CreateUserWithEmailDto) {
        return this.userService.createUserWithEmail(dto);
    }

    @Auth()
    @Get("find-all")
    async findAll() {
        return await this.userService.findAll();
    }

    @Auth()
    @Get(":id")
    async findById(@Param("id") id: string) {
        return await this.userService.findById(id);
    }

    @Auth()
    @Post("find-by-phone")
    async findByPhone(@Body() { phone }: { phone: string }) {
        return await this.userService.findByPhone(phone);
    }

    @Auth()
    @Post("find-by-login")
    async findByLogin(@Body() { login }: { login: string }) {
        return await this.userService.findByLogin(login);
    }

    @Auth()
    @Post("find-by-email")
    async findByEmail(@Body() { email }: { email: string }) {
        return await this.userService.findByEmail(email);
    }

    @Auth()
    @Patch()
    async update(
        @CurrentUser("id") userId: string,
        @Body() dto: UpdateUserDto
    ) {
        return this.userService.update(userId, dto);
    }

    @Auth()
    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.userService.remove(id);
    }
}
