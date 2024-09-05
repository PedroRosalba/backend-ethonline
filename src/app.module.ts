import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { UserArtistModule } from './userartist/user-artist.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [forwardRef(() => DatabaseModule),  
    UserModule,
    ArtistModule,
    UserArtistModule,
    DatabaseModule
  ],
})
export class AppModule {}
