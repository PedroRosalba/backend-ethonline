import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { ArtistRepository } from '../artist/repositories/artist.repository';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user.entity';
import { Artist } from '../artist/entities/artist.entity';
import { UserArtist } from 'src/userartist/entities/user-artist.entity';
import { UserArtistRepository } from 'src/userartist/repositories/user-artist.repository';  
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(ArtistRepository)
    private artistRepository: ArtistRepository,
    @InjectRepository(UserArtistRepository)
    private userArtistRepository: UserArtistRepository,
  ) {}

  // async createUser(createUserDto: CreateUserDto): Promise<User> {
  //   const { name, lastTimeCalled, timeLastSongPlayed, artistsMinutesListened } = createUserDto;

  //   const user = this.userRepository.create({
  //     name,
  //     lastTimeCalled,
  //     timeLastSongPlayed,
  //     artistsMinutesListened,
  //   });

  //   await this.userRepository.save(user);

  //   for (const { artistId, minutesListened } of artistsMinutesListened) {
  //     const artist = await this.artistRepository.findArtistById(artistId);
  //     // user.artistsMinutesListened.set(artist, minutesListened);
  //     user.artistsMinutesListened[artist] = minutesListened;
  //   }

  //   return this.userRepository.save(user);
  // }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, lastTimeCalled, timeLastSongPlayed, artistsMinutesListened } = createUserDto;

    // Create and save the user entity
    const user = this.userRepository.create({
      name,
      lastTimeCalled,
      timeLastSongPlayed,
    });

    await this.userRepository.save(user);

    // Create and save UserArtist relationships
    for (const { artistId, minutesListened } of artistsMinutesListened) {
      const artist = await this.artistRepository.findOne({ where: { id: artistId } });
      if (artist) {
        const userArtist = this.userArtistRepository.create({
          user,
          artist,
          minutesListened,
        });
        await this.userArtistRepository.save(userArtist);
      }
    }

    return user;
  }
}
