import {Router} from "express";
import {CreateUserController} from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import {ensureAdmin} from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController =  new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUserController = new AuthenticateUserController();

router.post("/users", ensureAdmin,createUserController.handle);
router.post("/tags", createTagController.handle);
router.post("/login", authenticatedUserController.handle);

export {router};