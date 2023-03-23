import { Router } from "express";
import { createClientController, deleteClienteController, listAllClientsForAdminController, listClientByIdController, updatedClientController } from "../controllers/client.controller";
import { createContactController } from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid";
import { clientSerializer } from "../serializers/client.serializer";
import { contactSerializer } from "../serializers/contact.serializer";
import ensureAuthAdminMiddleware from "../middleware/ensureAuthIsAdmin.middleware"
import ensureIsAdminOrOwner from "../middleware/ensureIsAdminOrOwner.middleware";

const userRoutes = Router()

userRoutes.post("", ensureDataIsValidMiddleware(clientSerializer), createClientController)
userRoutes.post("/:id/contact", ensureDataIsValidMiddleware(contactSerializer), createContactController)
userRoutes.get("", ensureAuthMiddleware, ensureAuthAdminMiddleware, listAllClientsForAdminController)
userRoutes.get("/:id", ensureAuthMiddleware, ensureIsAdminOrOwner, listClientByIdController)
userRoutes.patch("/:id", ensureAuthMiddleware, ensureIsAdminOrOwner, updatedClientController)
userRoutes.delete("/:id", ensureAuthMiddleware, deleteClienteController)

export default userRoutes;