import { IAnimeExternal, IAnimeParameters } from "../interfaces/IAnime";
import axios from "axios";

class AnimeExternal implements IAnimeExternal {
  getAnimeListByName = async (parameters: IAnimeParameters): Promise<string> => {
    const { data: html } = await axios.get(`${process.env.MAL_URL}/search/all`, {
      params: {
        q: parameters.anime,
        cat: "all",
      },
      headers: {
        accept: process.env.MAL_HEADERS_ACCEPT,
      },
    });
    return html;
  };
}

export default AnimeExternal;
