import { IAnimeExternal, IAnimeParameters } from "../interfaces/IAnime";
import { IAnimeGetAnimeByNameDTO } from "../dtos/IAnimeDTO";
import { JSDOM } from "jsdom";

class AnimeController {
  constructor(private animeExternal: IAnimeExternal) {}

  getAnimeByName = async (parameters: IAnimeParameters) => {
    const response = <IAnimeGetAnimeByNameDTO>{
      message: "you are looking for: " + parameters.anime,
    };
    return response;
  };

  getAnimeListByName = async (parameters: IAnimeParameters) => {
    const html = await this.animeExternal.getAnimeListByName(parameters);
    const dom = new JSDOM(html);
    const article = dom.window.document.querySelector(".content-left article").textContent;
    console.log(article);
    return { msg: "OK" };
  };
}

export default AnimeController;
