import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.provider';
import { artistProviders } from 'src/artist/artist.provider';
import { userartistProviders } from 'src/userartist/user-artist.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, ...artistProviders, ...userartistProviders, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
