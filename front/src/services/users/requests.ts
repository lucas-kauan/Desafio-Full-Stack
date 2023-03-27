import api from "../api"

export const getClientById = async (id: string) => {
    const token = localStorage.getItem("@token")
    const { data } = await api.get(`users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}