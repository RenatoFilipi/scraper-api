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

export interface IAnimeGetAnimeByLinkDTO {
  title: string;
  score: number;
  ranked: number;
  popularity: number;
  members: string;
  synopsis: string;
}
