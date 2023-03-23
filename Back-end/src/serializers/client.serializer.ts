import * as yup from "yup"
import { SchemaOf } from "yup"
import { IClientRequest, IClientResponse } from "../interfaces/clients"
import { IUserLogin } from "../interfaces/login"

const clientSerializer: SchemaOf<IClientRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    telephone: yup.string().length(11).required(),
})

const clientSerializerResponse: SchemaOf<IClientResponse> = yup.object().shape({
    createdAt: yup.string().required(),
    isAdmin: yup.boolean().required(),
    isActive: yup.boolean().required(),
    telephone: yup.string().length(11).required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required()
})


const listAllClientsResponseSerializer: SchemaOf<IClientResponse> = yup.object()
    .shape({
        contacts: yup.array().of(
            yup.object({
                createdAt: yup.string().required(),
                telephone: yup.string().length(11).required(),
                email: yup.string().email().required(),
                name: yup.string().required(),
                id: yup.string().required(),
            })
        ).required(),
        createdAt: yup.string().required(),
        isActive: yup.boolean().required(),
        isAdmin: yup.boolean().required(),
        telephone: yup.string().required(),
        email: yup.string().required(),
        name: yup.string().required(),
        id: yup.string().required(),
    })

const listClientsResponseSerializer: SchemaOf<IClientResponse[]> = yup.array(
    listAllClientsResponseSerializer
)

const loginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})

export { clientSerializer, clientSerializerResponse, loginSerializer, listClientsResponseSerializer, listAllClientsResponseSerializer }

