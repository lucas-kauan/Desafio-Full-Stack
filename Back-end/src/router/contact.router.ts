import { Router } from "express";
import { deleteContactController, listAllContactsByUserIdController, updatedContactController } from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";


const contactRoutes = Router()

contactRoutes.get("/:id", ensureAuthMiddleware, listAllContactsByUserIdController)
contactRoutes.patch("/:id", ensureAuthMiddleware, updatedContactController)
contactRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController)


export default contactRoutes;