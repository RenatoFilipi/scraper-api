import MalController from "../../controllers/animes/malController";
import MalService from "../../services/animes/malService";

const malService = new MalService();

const malController = new MalController(malService);

export { malController };
