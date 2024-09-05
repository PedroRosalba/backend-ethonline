import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateArtistDto } from './dto/create-artist-dto';
import { Artist } from '../artist/entities/artist.entity';
import { User } from '../user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ArtistService {
  constructor(
    @Inject('ARTIST_REPOSITORY')
    private artistRepository: Repository<Artist>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async createArtist(createArtistDto: CreateArtistDto): Promise<Artist> {
    const { name } = createArtistDto;
    const artist = this.artistRepository.create({ name });
    return this.artistRepository.save(artist);
  }
  async getLeaderboard(spotifyId: string): Promise<any[]> {
    const artist = await this.artistRepository.find({
      where: {spotifyId}
    });
    return 
  }
}
