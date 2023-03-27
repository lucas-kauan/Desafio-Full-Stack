import { Request, Response } from "express"
import { IClientResponse } from "../interfaces/clients"
import { IContactRequest, IContactUpdate } from "../interfaces/contacts"
import { createContactService, deleteContactService, listAllContactsByUserIdService, updatedContactService } from "../services/contacts.service"

const createContactController = async (req: Request, res: Response) => {
    const contact: IContactRequest = req.body
    const clientId: string = req.params.id
    const data = await createContactService(contact, clientId)
    return res.status(201).json(data)
}

const listAllContactsByUserIdController = async (req: Request, res: Response) => {
    const userId: string = req.params.id
    const data = await listAllContactsByUserIdService(userId)
    return res.status(200).json(data)
}

const updatedContactController = async (req: Request, res: Response) => {
    const userData: IContactUpdate = req.body
    const userId: string = req.params.id
    const userLog: IClientResponse = req.user
    const data = await updatedContactService(userData, userId, userLog)
    return res.status(200).json(data)
}

const deleteContactController = async (req: Request, res: Response) => {
    const contactId: string = req.params.id
    const userLog: IClientResponse = req.user
    const data = await deleteContactService(contactId, userLog)
    return res.status(200).json(data)
}

export { createContactController, updatedContactController, deleteContactController, listAllContactsByUserIdController };