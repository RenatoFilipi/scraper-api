import { Router, Request, Response, NextFunction, request } from "express";
import { animeController } from "../utils/animes/DependencyResolver";
import HttpException from "../exceptions/HttpExceptions";

const animeRouter = Router();

// requests

animeRouter.post("/api/v1/animes/getanimebyname", (request: Request, response: Response, next: NextFunction) => {
  return animeController.getAnimeByName(request, response, next);
});

animeRouter.post("/api/v1/animes/getanimelistbyname", (request: Request, response: Response, next: NextFunction) => {
  return animeController.getAnimeListByName(request, response, next);
});

// 404

animeRouter.use((request: Request, response: Response) => {
  return response.status(404).json({ Error: 404 });
});

// error

animeRouter.use((error: unknown, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof HttpException) {
    return response.status(error.status).json({ message: error.message });
  } else {
    return response.status(500).json({ message: "Unknown error" });
  }
});

export default animeRouter;
