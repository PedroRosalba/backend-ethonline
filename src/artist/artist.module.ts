import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { Artist } from './entities/artist.entity';
import { DatabaseModule } from 'src/database/database.module';
import { artistProviders } from './artist.provider';
import { userProviders } from 'src/user/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...artistProviders, ...userProviders, ArtistService],
  controllers: [ArtistController],
  exports: [ArtistService],
})
export class ArtistModule {}
