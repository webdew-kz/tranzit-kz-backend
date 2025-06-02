import { Controller } from '@nestjs/common';
import { TrailerService } from './trailer.service';

@Controller('trailer')
export class TrailerController {
  constructor(private readonly trailerService: TrailerService) {}
}
