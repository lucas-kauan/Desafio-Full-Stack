import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";


const ensureAuthAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user.isAdmin) {
        return next()
    }

    throw new AppError("Not permission", 403)
}
export default ensureAuthAdminMiddleware;