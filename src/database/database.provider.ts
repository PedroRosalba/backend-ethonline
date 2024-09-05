import AppDataSource from '../database/data-source';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      await AppDataSource.initialize();
      return AppDataSource;
    },
  },
];
