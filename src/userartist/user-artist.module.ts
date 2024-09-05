import { Module } from '@nestjs/common';
import { UserArtistService } from './user-artist.service';
import { DatabaseModule } from '../database/database.module';
import { userartistProviders } from './user-artist.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...userartistProviders,UserArtistService],
  exports: [UserArtistService], // Export the service to be used in other modules
})
export class UserArtistModule {}
