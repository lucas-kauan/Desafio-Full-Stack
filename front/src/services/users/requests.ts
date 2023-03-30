import { IUserCreate } from "../../components/CreateUserModal"
import api from "../api"
import { IContactCreate } from "../contacts/interface"
import { IUserUpdate } from "./interface"

export const getClientById = async (id: string) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.get(`users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const updateUserById = async (id: string, body: IUserUpdate) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.patch(`users/${id}`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const createContactByUserId = async (id: string, body: IContactCreate) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.post(`users/${id}/contact`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const deleteUserById = async (id: string) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.delete(`users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const createUser = async (body: IUserCreate) => {
    const { data } = await api.post(`users`, body)
    return data
}