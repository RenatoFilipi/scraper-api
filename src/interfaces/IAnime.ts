export interface IAnimeExternal {
  getAnimeListByName(parameters: IAnimeParameters): Promise<string>;
}

export interface IAnimeParameters {
  anime: string;
}
