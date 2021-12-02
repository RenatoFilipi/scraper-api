import { IAnimeParameters } from "../interfaces/IAnime";
import { IAnimeGetAnimeByNameDTO } from "../dtos/IAnimeDTO";

class AnimeController {
  getAnimeByName = async (parameters: IAnimeParameters) => {
    const response = <IAnimeGetAnimeByNameDTO>{
      message: "you are looking for: " + parameters.anime,
    };
    return response;
  };
}

export default AnimeController;
