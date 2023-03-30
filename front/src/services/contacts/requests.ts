import api from "../api"
import { IContactUpdate } from "./interface"

export const getAllContactsByUser = async (id: string) => {
    const token = localStorage.getItem("@token")
    if (token) {
        const { data } = await api.get(`contact/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    }
}

export const updateContactById = async (id: string, body: IContactUpdate) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.patch(`contact/${id}`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data
}

export const deleteContactById = async (id: string) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.delete(`contact/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

