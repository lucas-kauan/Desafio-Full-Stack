import React, { createContext, useState } from "react";
import api from "../../services/api"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export interface IDefaultProviderProps {
    children: React.ReactNode
}

export interface IUser {
    id: string
    name: string
    email: string
    telephone: string
    isActive: boolean
    isAdmin: boolean
    createdAt: string
    contacts: IContact[]
}

export interface IContact {
    id: string
    name: string
    email: string
    telephone: string
    createdAt: string
}

export interface IRegisterFormValues {
    name: string
    email: string
    password: string
    telephone: string
}

export interface ILoginFormValues {
    email: string
    password: string
}
// loading, user, userRegister, userLogin, userLoggout
export interface IUserContext {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    user: IUser | null
    userRegister: (formData: IRegisterFormValues) => Promise<void>
    userLogin: (formData: ILoginFormValues) => Promise<void>
    userLoggout: () => Promise<void>
}


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()

    const userRegister = async (formData: IRegisterFormValues) => {
        try {
            api.post("/users", formData)
            toast.success("Usuário cadastrado com sucesso!")
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    const userLogin = async (formData: ILoginFormValues) => {
        try {
            setLoading(true)
            const response = await api.post("login", formData)
            localStorage.setItem("@token", response.data[1].token)
            setUser(response.data[0].user)
            toast.success("Usuário logado!")
            if (loading) {
                navigate("/dashboard")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const userLoggout = async () => {
        setUser(null);
        localStorage.removeItem("@token")
    }

    return (
        <UserContext.Provider value={{ loading, setLoading, user, userRegister, userLogin, userLoggout }}>
            {children}
        </UserContext.Provider>
    )
}