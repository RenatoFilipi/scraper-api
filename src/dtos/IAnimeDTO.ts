export interface IAnimeGetAnimeByNameDTO {
  message: string;
}

export interface IAnimeGetAnimeListByNameDTO {
  anime: string;
  results: number;
  data: IAnimeGetAnimeListByNameDataDTO[];
}

export interface IAnimeGetAnimeListByNameDataDTO {
  title: string;
}
