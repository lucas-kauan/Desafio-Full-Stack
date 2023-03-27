import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken';
import { ILike } from "typeorm";
import { AppError } from "../errors/AppError";
import { Client } from "../entities/client.entity";
import AppDataSource from "../data-source";
import { IUserLogin } from "../interfaces/login";
import { clientSerializerResponse, listAllClientsResponseSerializer } from "../serializers/client.serializer";

const loginService = async (userData: IUserLogin) => {

    const userRepository = AppDataSource.getRepository(Client)

    const user = await userRepository.findOne({
        where: {
            email: ILike(`${userData.email}`)
        },
        relations: {
            contacts: true
        }
    })

    if (!user) {
        throw new AppError("Email or password invalid", 403)
    }

    const passwordMatch = await compare(userData.password, user.password)

    if (!passwordMatch) {
        throw new AppError("User or password invalid", 403)
    }

    const token = jwt.sign(
        { id: user.id },
        process.env.SECRET_KEY as string,
        {
            subject: String(user.id),
            expiresIn: "24h"
        }
    )

    const returnedData = await listAllClientsResponseSerializer.validate(user, {
        stripUnknown: true
    })

    return token

}

export default loginService;