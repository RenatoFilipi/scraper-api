import { Router, Request, Response, NextFunction } from "express";
import { malController } from "../../utils/animes/DependencyResolver";

const malRouter = Router();

malRouter.post("/api/v1/mal/getanimebyname", (request: Request, response: Response, next: NextFunction) => {
  return malController.getAnimeByName(request, response, next);
});

export default malRouter;
