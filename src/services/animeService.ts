import { IAnimeExternal, IAnimeParameters, IMyAnimeListLinkParameters } from "../interfaces/IAnime";
import {
  IAnimeGetAnimeByNameDTO,
  IAnimeGetAnimeListByNameDTO,
  IAnimeGetAnimeListByNameDataDTO,
  IAnimeGetAnimeByLinkDTO,
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

  getAnimeByMyAnimeListLink = async (parameters: IMyAnimeListLinkParameters) => {
    const result = await this.animeExternal.getAnimeByMyAnimeListLink(parameters);
    const response = <IAnimeGetAnimeByLinkDTO>{};
    const $ = cheerio.load(result);

    response.title = $(".title-name.h1_bold_none strong").text();
    response.score = parseFloat($("div .score-label").text());
    response.ranked = parseFloat($(".numbers.ranked strong").text().substring(1));
    response.popularity = parseFloat($(".numbers.popularity strong").text().substring(1));
    response.members = parseFloat($(".numbers.members strong").text().replace(/,/g, "")).toLocaleString("en");
    response.synopsis = $(
      "#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(1) > td > p"
    )
      .text()
      .replace(/(\r\n|\n|\r)/gm, "")
      .split("[")[0];

    return response;
  };
}

export default AnimeController;
