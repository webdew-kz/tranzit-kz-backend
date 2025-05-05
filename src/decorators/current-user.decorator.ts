/** @format */

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "generated/prisma";

export const CurrentUser = createParamDecorator(
    (data: keyof User, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest<{ user: User }>();
        const user = request.user;

        return data ? user[data] : user;
    }
);
