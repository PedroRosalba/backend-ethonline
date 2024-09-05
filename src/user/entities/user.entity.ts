import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Artist } from '../../artist/entities/artist.entity';
import { UserArtist } from '../../userartist/entities/user-artist.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'timestamptz' })
  lastTimeCalled: Date;

  @Column({ type: 'timestamptz' })
  timeLastSongPlayed: Date;

  @OneToMany(() => UserArtist, (userArtist) => userArtist.user)
  artistsMinutesListened: UserArtist[];
}
