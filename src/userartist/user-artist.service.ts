import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserArtist } from '../userartist/entities/user-artist.entity';
import { User } from '../user/entities/user.entity';
import { Artist } from '../artist/entities/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserArtistService {
  constructor(
    @Inject('USERARTIST_REPOSITORY')
    private userartistRepository: Repository<UserArtist>,
  ) {}

  async createUserArtist(user: User, artist: Artist, minutesListened: number): Promise<UserArtist> {
    const userArtist = this.userartistRepository.create({
      user,
      artist,
      minutesListened,
    });
    return this.userartistRepository.save(userArtist);
  }
}
