import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';
import { ArtistRepository } from '../artist/repositories/artist.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository, ArtistRepository])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
