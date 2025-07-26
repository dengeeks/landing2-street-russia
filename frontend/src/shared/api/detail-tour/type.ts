import type { MediaFormatType, ModeratorType} from '@/shared/api/type'


export type ProgramItemType = {
  id: string;
  description: string;
  start_time: string;
  moderator: ModeratorType[]
};


export type ProgramDatesType = {
  date: string
  programs: {
    time: string;
    items: ProgramItemType[];
  }[]
}

export type TourInfoType = {
  title: string;
  starting_date: string;
  ending_date: string;
  place: string;
  target_audience: string;
  target: string;
};


export type DetailTourType = MediaFormatType & TourInfoType &{
  id: string;
  program_dates: ProgramDatesType[];
}
