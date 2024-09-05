import { DataSource } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Artist } from '../artist/entities/artist.entity';
import { UserArtist } from '../userartist/entities/user-artist.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 8080,
  username: 'postgres',
  password: 'pass',
  database: 'mydatabase',
  entities: [
    User,
    Artist,
    UserArtist,
  ],
  migrations: ['dist/migrations/*.{ts,js}'],
  migrationsTableName: 'typeorm_migrations',
  synchronize: false,
});

export default AppDataSource;  // <--- Add this default export

// Ensure to initialize in your app code, not here.
