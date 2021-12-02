import { Router, Request, Response, NextFunction } from "express";
import { animeController } from "../utils/animes/DependencyResolver";

const animeRouter = Router();

animeRouter.post("/api/v1/mal/getanimebyname", (request: Request, response: Response, next: NextFunction) => {
  return animeController.getAnimeByName(request, response, next);
});

export default animeRouter;
