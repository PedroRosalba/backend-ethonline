import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Artist } from '../../artist/entities/artist.entity';

@Entity()
export class UserArtist {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.artistsMinutesListened)
  user: User;

  @ManyToOne(() => Artist, (artist) => artist.users)
  artist: Artist;

  @Column('int')
  minutesListened: number;
}
