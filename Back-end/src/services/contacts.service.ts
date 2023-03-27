
import AppDataSource from "../data-source"
import { Client } from "../entities/client.entity"
import { Contacts } from "../entities/contacts.entity"
import { AppError } from "../errors/AppError"
import { IClientResponse } from "../interfaces/clients"
import { IContactRequest, IContactResponse, IContactUpdate } from "../interfaces/contacts"
import { contactSerializerResponse } from "../serializers/contact.serializer"

const createContactService = async (contactData: IContactRequest, clientId: string) => {

    const contactRepository = AppDataSource.getRepository(Contacts)
    const clientRespository = AppDataSource.getRepository(Client)

    const client = await clientRespository.findOneBy({
        id: clientId
    })

    if (!client) {
        throw new AppError("User not exists", 409)
    }

    const contactReturn = { ...contactData, client: client }

    const contacts = await contactRepository.findOneBy({
        email: contactData.email
    })

    if (contacts) {
        throw new AppError("Contact already exists", 409)
    }

    const contact = contactRepository.create(contactReturn)

    await contactRepository.save(contact)

    const returned = await contactSerializerResponse.validate(contact, {
        stripUnknown: true,
        abortEarly: false
    })

    return returned

}

const listAllContactsByUserIdService = async (userId: string) => {

    const contactRepository = AppDataSource.getRepository(Client)

    const contactsReturned = await contactRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            contacts: true
        }
    })

    const contacts = []
    contactsReturned.contacts.map((el) => {
        contacts.push({ id: el.id, name: el.name, email: el.email, telephone: el.telephone })
    })

    return contacts

}

const updatedContactService = async (contactData: IContactUpdate, contactId: string, userLog: IClientResponse): Promise<IContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contacts)
    const contactUpdate = await contactRepository.findOneBy({ id: contactId })

    if (Object.keys(contactData).includes("createdAt") || Object.keys(contactData).includes("id")) {
        throw new AppError("id and createdAt cannot be changed", 401)
    }

    if (userLog.isAdmin) {
        const updated = contactRepository.create({
            ...contactUpdate,
            ...contactData
        })

        await contactRepository.save(updated)

        const returned = await contactSerializerResponse.validate(updated, {
            stripUnknown: true,
            abortEarly: false
        })

        return returned
    }

    if (userLog.id == contactUpdate.client.id) {
        const updated = contactRepository.create({
            ...contactUpdate,
            ...contactData
        })

        await contactRepository.save(updated)

        const returned = await contactSerializerResponse.validate(updated, {
            stripUnknown: true,
            abortEarly: false
        })

        return returned
    }

    throw new AppError("Not permission!", 401)

}

const deleteContactService = async (contactId: string, userLog: IClientResponse) => {

    const contactRepository = AppDataSource.getRepository(Contacts)
    const contactUpdate = await contactRepository.findOneBy({ id: contactId })

    if (userLog.isAdmin) {
        const contact = await contactRepository.findOneBy({
            id: contactId
        })

        contact.isActive = false
        await contactRepository.save(contact)

        return {}
    }

    if (userLog.id == contactUpdate.client.id) {
        const contact = await contactRepository.findOneBy({
            id: contactId
        })

        contact.isActive = false
        await contactRepository.save(contact)

        return {}
    }

    throw new AppError("Not permission!", 401)
}

export { createContactService, updatedContactService, deleteContactService, listAllContactsByUserIdService }