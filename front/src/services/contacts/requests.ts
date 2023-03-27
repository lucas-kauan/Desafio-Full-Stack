import api from "../api"

export const getAllContactsByUser = async (id: string) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.get(`contact/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return data
}

export const updateContactById = async (id: string) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.patch(`contact/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    return data
}