import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { Client } from "../entities/client.entity"
import { AppError } from "../errors/AppError"

const ensureIsAdminOrOwner = async (req: Request, res: Response, next: NextFunction) => {

    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({
        id: req.user.id
    })

    if (client.isAdmin) {
        return next()
    } else if (client.id == req.params.id) {
        return next()
    }

    throw new AppError("Not permission!", 401)
}
export default ensureIsAdminOrOwner