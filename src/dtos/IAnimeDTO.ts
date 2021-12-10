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
  type: string;
  link: string;
}

export interface IAnimeGetAnimeByLinkDTO {
  title: string;
  score: number;
  ranked: number;
  popularity: number;
  members: string;
  synopsis: string;
}
