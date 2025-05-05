/** @format */

import { PartialType } from "@nestjs/mapped-types";
import { CreateCargoDto } from "./create-cargo.dto";

export class SearchCargoDto extends PartialType(CreateCargoDto) {}
