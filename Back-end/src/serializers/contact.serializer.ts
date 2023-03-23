import * as yup from "yup"
import { SchemaOf } from "yup"
import { IContactRequest, IContactResponse } from "../interfaces/contacts"

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().length(11).required(),
})

const contactSerializerResponse: SchemaOf<IContactResponse> = yup.object().shape({
    createdAt: yup.string().required(),
    telephone: yup.string().length(11).required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required()
})

export { contactSerializer, contactSerializerResponse }

