import { Router } from "express";
import createLoginController from "../controllers/login.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid";
import { loginSerializer } from "../serializers/client.serializer";

const loginRoutes = Router()

loginRoutes.post("", ensureDataIsValidMiddleware(loginSerializer), createLoginController)

export default loginRoutes;