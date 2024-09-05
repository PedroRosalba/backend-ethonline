import { EntityRepository, Repository } from 'typeorm';
import { Artist } from '../../artist/entities/artist.entity';

@EntityRepository(Artist)
export class ArtistRepository extends Repository<Artist> {
    async findArtistById(artistId: number): Promise<Artist | undefined> {
        return this.findOne({
          where: { id: artistId },
        });
      
    }
    async getLeaderboard(): Promise<any[]> {
        return this.createQueryBuilder('artist')
          .leftJoinAndSelect('artist.users', 'user')
          .addSelect('SUM(user.artistMinutesListened)', 'totalMinutes')
          .groupBy('artist.id')
          .orderBy('totalMinutes', 'DESC')
          .getRawMany();
      } 
           
}