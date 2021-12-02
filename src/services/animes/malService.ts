import { IMalParameters } from "../../interfaces/animes/IMal";
import { IMalGetAnimeByNameDTO } from "../../dtos/animes/IMalDTOS";

class MalService {
  getAnimeByName = async (parameters: IMalParameters) => {
    const response = <IMalGetAnimeByNameDTO>{
      message: "you are looking for: " + parameters.anime,
    };
    return response;
  };
}

export default MalService;
