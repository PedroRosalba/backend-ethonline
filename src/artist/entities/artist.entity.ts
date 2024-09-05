import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { UserArtist } from 'src/userartist/entities/user-artist.entity';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  spotifyId: string; 
  
  @OneToMany(() => UserArtist, (userArtist) => userArtist.artist)
  users: UserArtist[];
}
