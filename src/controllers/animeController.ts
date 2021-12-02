import { Request, Response, NextFunction } from "express";
import MalService from "../services/animeService";

class AnimeController {
  constructor(private malService: MalService) {}

  getAnimeByName = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { parameters } = request.body;
      const data = await this.malService.getAnimeByName(parameters);
      return response.json(data);
    } catch (error: unknown) {
      return next(error);
    }
  };
}

export default AnimeController;
