import { Request, Response, NextFunction } from "express";
import AnimeService from "../services/animeService";

class AnimeController {
  constructor(private animeService: AnimeService) {}

  getAnimeByName = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { parameters } = request.body;
      const data = await this.animeService.getAnimeByName(parameters);
      return response.json(data);
    } catch (error: unknown) {
      return next(error);
    }
  };

  getAnimeListByName = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { parameters } = request.body;
      const data = await this.animeService.getAnimeListByName(parameters);
      return response.json(data);
    } catch (error: unknown) {
      return next(error);
    }
  };

  getAnimeByMyAnimeListLink = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { parameters } = request.body;
      const data = await this.animeService.getAnimeByMyAnimeListLink(parameters);
      return response.json(data);
    } catch (error: unknown) {
      next(error);
    }
  };
}

export default AnimeController;
