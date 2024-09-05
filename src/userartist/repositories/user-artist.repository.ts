import { EntityRepository, Repository } from 'typeorm';
import { UserArtist } from '../entities/user-artist.entity';

@EntityRepository(UserArtist)
export class UserArtistRepository extends Repository<UserArtist> {}
