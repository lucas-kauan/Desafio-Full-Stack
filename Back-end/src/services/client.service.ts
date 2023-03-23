import AppDataSource from "../data-source"
import { Client } from "../entities/client.entity"
import { AppError } from "../errors/AppError"
import { IClientRequest, IClientResponse, IClientUpdate } from "../interfaces/clients"
import { clientSerializerResponse, listClientsResponseSerializer, listAllClientsResponseSerializer } from "../serializers/client.serializer"

const createClientService = async (clientData: IClientRequest) => {

    const clientRepository = AppDataSource.getRepository(Client)

    const verifyAlreadyExists = await clientRepository.findOneBy({
        email: clientData.email
    })

    if (verifyAlreadyExists) {
        throw new AppError("Email already exists!", 409)
    }

    const client = clientRepository.create(clientData)

    await clientRepository.save(client)

    const userWithoutPassword = await clientSerializerResponse.validate(client, {
        stripUnknown: true
    })

    return userWithoutPassword

}

const listAllClientsForAdminService = async () => {

    const clientRepository = AppDataSource.getRepository(Client)

    const listAllClients = await clientRepository.find({
        relations: {
            contacts: true
        }
    })

    const returnedData = await listClientsResponseSerializer.validate(
        listAllClients,
        {
            stripUnknown: true
        }
    )

    return returnedData
}

const listClientByIdService = async (userId: string, user: IClientResponse) => {
    const clientRepository = AppDataSource.getRepository(Client)

    const userReturned = await clientRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            contacts: true
        }
    })

    const returnedData = await listAllClientsResponseSerializer.validate(
        userReturned,
        {
            stripUnknown: true
        }
    )

    return returnedData

}



const deleteClientService = async (userId: string): Promise<object> => {

    const userRepository = AppDataSource.getRepository(Client)

    const user = await userRepository.findOneBy({
        id: userId
    })

    user.isActive = false
    await userRepository.save(user)

    return {}

}

const updatedClientService = async (userData: IClientUpdate, updatedId: string) => {

    const userRepository = AppDataSource.getRepository(Client)
    const userUpdate = await userRepository.findOneBy({ id: updatedId })

    if (Object.keys(userData).includes("isAdmin") || Object.keys(userData).includes("id") || Object.keys(userData).includes("isActive"), Object.keys(userData).includes("createdAt")) {
        throw new AppError("id, isAdmin, isActive and createdAt cannot be changed", 401)
    }

    const updated = userRepository.create({
        ...userUpdate,
        ...userData
    })
    await userRepository.save(updated)

    const returned = await clientSerializerResponse.validate(updated, {
        stripUnknown: true,
        abortEarly: false
    })

    return returned

}

export { createClientService, listAllClientsForAdminService, listClientByIdService, deleteClientService, updatedClientService }