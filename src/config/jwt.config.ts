import { ConfigService } from '@nestjs/config';

export const jwtConfig = (config: ConfigService): { secret: string } => ({
  secret: config.getOrThrow<string>('JWT_SECRET'),
});
