import { IAnimeParameters } from "../interfaces/IAnime";
import { IAnimeGetAnimeByNameDTO } from "../dtos/IAnimeDTO";
import axios from "axios";

class AnimeController {
  getAnimeByName = async (parameters: IAnimeParameters) => {
    const response = <IAnimeGetAnimeByNameDTO>{
      message: "you are looking for: " + parameters.anime,
    };
    return response;
  };

  getAnimeListByName = async (parameters: IAnimeParameters) => {
    return {};
  };
}

export default AnimeController;
