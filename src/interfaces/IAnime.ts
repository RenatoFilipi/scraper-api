export interface IAnimeExternal {
  getAnimeListByName(parameters: IAnimeParameters): Promise<string>;
  getAnimeByMyAnimeListLink(parameters: IMyAnimeListLinkParameters): Promise<string>;
}

export interface IAnimeParameters {
  anime: string;
}

export interface IMyAnimeListLinkParameters {
  link: string;
}
