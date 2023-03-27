import { Request, Response } from "express"
import { IClientRequest, IClientResponse, IClientUpdate } from "../interfaces/clients"
import { createClientService, deleteClientService, listAllClientsForAdminService, listClientByIdService, updatedClientService } from "../services/client.service"

const createClientController = async (req: Request, res: Response) => {
    const client: IClientRequest = req.body
    const data = await createClientService(client)
    return res.status(201).json(data)
}

const listAllClientsForAdminController = async (req: Request, res: Response) => {
    const data = await listAllClientsForAdminService()
    return res.status(200).json(data)
}

const listClientByIdController = async (req: Request, res: Response) => {
    const userId: string = req.params.id
    const data = await listClientByIdService(userId)
    return res.status(200).json(data)
}

const updatedClientController = async (req: Request, res: Response) => {
    const user: IClientUpdate = req.body
    const clientId: string = req.params.id
    const data = await updatedClientService(user, clientId)
    return res.status(200).json(data)
}

const deleteClienteController = async (req: Request, res: Response) => {
    const userId: string = req.params.id
    const data = await deleteClientService(userId)
    return res.status(200).json(data)
}

export { createClientController, listAllClientsForAdminController, listClientByIdController, deleteClienteController, updatedClientController };