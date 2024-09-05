import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserArtist } from './entities/user-artist.entity';
import { UserArtistRepository } from './repositories/user-artist.repository';
import { User } from 'src/user/entities/user.entity';
import { Artist } from 'src/artist/entities/artist.entity';

@Injectable()
export class UserArtistService {
  constructor(
    @InjectRepository(UserArtistRepository)
    private userArtistRepository: UserArtistRepository,
  ) {}

  async createUserArtist(user: User, artist: Artist, minutesListened: number): Promise<UserArtist> {
    const userArtist = this.userArtistRepository.create({
      user,
      artist,
      minutesListened,
    });
    return this.userArtistRepository.save(userArtist);
  }
}
