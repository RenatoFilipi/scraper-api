import AnimeController from "../../controllers/animeController";
import AnimeService from "../../services/animeService";
import AnimeExternal from "../../externals/animeExternal";

const animeExternal = new AnimeExternal();
const animeService = new AnimeService(animeExternal);
const animeController = new AnimeController(animeService);

export { animeController };
