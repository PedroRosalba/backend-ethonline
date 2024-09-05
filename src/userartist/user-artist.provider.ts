import { DataSource } from 'typeorm';
import { UserArtist } from './entities/user-artist.entity';

export const userartistProviders = [
  {
    provide: 'USERARTIST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserArtist),
    inject: ['DATA_SOURCE'],
  },
];