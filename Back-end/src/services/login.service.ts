import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken';
import { ILike } from "typeorm";
import { AppError } from "../errors/AppError";
import { Client } from "../entities/client.entity";
import AppDataSource from "../data-source";
import { IUserLogin } from "../interfaces/login";

const loginService = async (userData: IUserLogin): Promise<string> => {

    const userRepository = AppDataSource.getRepository(Client)

    const user = await userRepository.findOneBy({
        email: ILike(`${userData.email}`)
    })

    if (!user) {
        throw new AppError("Email or password invalid", 403)
    }

    // if (!user.isActive) {
    //     throw new AppError("User disabled", 404)
    // }

    const passwordMatch = await compare(userData.password, user.password)

    if (!passwordMatch) {
        throw new AppError("User or password invalid", 403)
    }

    const token = jwt.sign(
        { email: user.id },
        process.env.SECRET_KEY as string,
        {
            subject: String(user.id),
            expiresIn: "24h"
        }
    )

    return token

}

export default loginService;