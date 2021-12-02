import { IAnimeParameters } from "../interfaces/IAnime";
import { IAnimeGetAnimeByNameDTO } from "../dtos/IAnimeDTO";
import axios from "axios";
import { JSDOM } from "jsdom";

class AnimeController {
  getAnimeByName = async (parameters: IAnimeParameters) => {
    const response = <IAnimeGetAnimeByNameDTO>{
      message: "you are looking for: " + parameters.anime,
    };
    return response;
  };

  getAnimeListByName = async (parameters: IAnimeParameters) => {
    const { data: html } = await axios.get(`${process.env.MAL_URL}/search/all`, {
      params: {
        q: parameters.anime,
        cat: "all",
      },
      headers: {
        accept: process.env.MAL_HEADERS_ACCEPT,
      },
    });

    const dom = new JSDOM(html);
    const article = dom.window.document.querySelector(".content-left article").textContent;
    console.log(article);
    return { msg: "OK" };
  };
}

export default AnimeController;
