export class CreateUserDto {
    name: string;
    lastTimeCalled: Date;
    timeLastSongPlayed: Date;
    artistsMinutesListened: { artistId: number; minutesListened: number }[];
  }
  