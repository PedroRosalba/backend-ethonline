import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { User } from './user/entities/user.entity';
import { Artist } from './artist/entities/artist.entity';
import { UserArtist } from './userartist/entities/user-artist.entity';
import { UserArtistModule } from './userartist/user-artist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'myuser',  
      // password: 'mypassword',
      // database: 'mydatabase', 
      // entities: [User, Artist],
      // synchronize: true,  
    }),
    TypeOrmModule.forFeature([User, Artist, UserArtist]),  
    UserModule,
    ArtistModule,
    UserArtistModule
  ],
})
export class AppModule {}
