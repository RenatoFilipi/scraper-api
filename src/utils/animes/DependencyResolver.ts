import AnimeController from "../../controllers/animeController";
import AnimeService from "../../services/animeService";

const animeService = new AnimeService();

const animeController = new AnimeController(animeService);

export { animeController };
