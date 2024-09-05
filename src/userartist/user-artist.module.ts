import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserArtistRepository } from './repositories/user-artist.repository';
import { UserArtistService } from './user-artist.service';
import { UserArtist } from './entities/user-artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserArtist])],
  providers: [UserArtistService, UserArtistRepository],
  exports: [UserArtistService, UserArtistRepository], // Export the service to be used in other modules
})
export class UserArtistModule {}
