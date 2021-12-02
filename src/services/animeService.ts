import { IAnimeExternal, IAnimeParameters } from "../interfaces/IAnime";
import {
  IAnimeGetAnimeByNameDTO,
  IAnimeGetAnimeListByNameDTO,
  IAnimeGetAnimeListByNameDataDTO,
} from "../dtos/IAnimeDTO";
import cheerio from "cheerio";

class AnimeController {
  constructor(private animeExternal: IAnimeExternal) {}

  getAnimeByName = async (parameters: IAnimeParameters) => {
    const response = <IAnimeGetAnimeByNameDTO>{
      message: "you are looking for: " + parameters.anime,
    };
    return response;
  };

  getAnimeListByName = async (parameters: IAnimeParameters) => {
    const result = await this.animeExternal.getAnimeListByName(parameters);
    const response = <IAnimeGetAnimeListByNameDTO>{
      anime: parameters.anime,
      results: 0,
      data: [],
    };
    const $ = cheerio.load(result);

    $("article")
      .first()
      .find(".list.di-t.w100")
      .each((index, elem) => {
        const data = <IAnimeGetAnimeListByNameDataDTO>{
          title: $(elem).find(".information.di-tc.va-t.pt4.pl8").find(".hoverinfo_trigger.fw-b.fl-l").text(),
        };
        response.data.push(data);
      });
    response.results = response.data.length;
    return response;
  };
}

export default AnimeController;
