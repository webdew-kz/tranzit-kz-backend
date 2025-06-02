import { Controller } from '@nestjs/common';
import { TractorService } from './tractor.service';

@Controller('tractor')
export class TractorController {
  constructor(private readonly tractorService: TractorService) {}
}
