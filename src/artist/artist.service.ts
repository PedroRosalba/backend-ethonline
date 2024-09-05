import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistRepository } from './repositories/artist.repository';
import { CreateArtistDto } from './dto/create-artist-dto';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(ArtistRepository)
    private artistRepository: ArtistRepository,
  ) {}

  async createArtist(createArtistDto: CreateArtistDto): Promise<Artist> {
    const { name } = createArtistDto;
    const artist = this.artistRepository.create({ name });
    return this.artistRepository.save(artist);
  }
  async getLeaderboard(): Promise<any[]> {
    return this.artistRepository.getLeaderboard();
  }
}
