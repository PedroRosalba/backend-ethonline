import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { ArtistRepository } from './repositories/artist.repository';
import { Artist } from './entities/artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artist, ArtistRepository])],
  providers: [ArtistService],
  controllers: [ArtistController],
  exports: [ArtistService],
})
export class ArtistModule {}
