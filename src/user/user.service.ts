import { Injectable, Inject, forwardRef} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from '../user/entities/user.entity';
import { Artist } from '../artist/entities/artist.entity';
import { UserArtist } from '../userartist/entities/user-artist.entity';
import { ArtistService } from 'src/artist/artist.service';
import { UserArtistService } from 'src/userartist/user-artist.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    @Inject('ARTIST_REPOSITORY')
    private artistRepository: Repository<Artist>,
    @Inject('USERARTIST_REPOSITORY')
    private userartistRepository: Repository<UserArtist>,
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
      artistsMinutesListened
    });

    await this.userRepository.save(user);

    // Create and save UserArtist relationship
    // for (const { artistId, minutesListened } of 
    artistsMinutesListened.map(async ({ artistId, minutesListened }) => {
        const artist = await this.artistRepository.findOne({ where: { id: artistId } });
        if (artist) {
          const userArtist = this.userartistRepository.create({
            user,
            artist,
            minutesListened,
          
          });
          await this.userartistRepository.save(userArtist);
        }
      }   
    ) 
    //   const artist = await this.artistRepository.findOne({ where: { id: artistId } });
    //   if (artist) {
    //     const userArtist = this.userArtistRepository.create({
    //       user,
    //       artist,
    //       minutesListened,
        
    //     });
    //     await this.userArtistRepository.save(userArtist);
    //   }
    // }

    return user;
  }
}
