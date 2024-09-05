import { Controller, Post, Body, Get } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist-dto';
import { Artist } from './entities/artist.entity';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  createArtist(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.artistService.createArtist(createArtistDto);
  }
  @Get('leaderboard')
  async getLeaderboard() {
    return this.artistService.getLeaderboard();
  }
}
