import React, { createContext, useEffect, useState } from "react";
import api from "../../services/api"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAllContactsByUser } from "../../services/contacts/requests";
import jwtDecode from "jwt-decode";
import { getClientById } from "../../services/users/requests";


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
    reload: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setReload: React.Dispatch<React.SetStateAction<boolean>>
    user: IUser | null
    userRegister: (formData: IRegisterFormValues) => Promise<void>
    userLogin: (formData: ILoginFormValues) => Promise<void>
    userLoggout: () => Promise<void>
    contactsClient: IContact[] | undefined
}

interface IToken {
    exp: number
    iat: number
    id: string
    sub: string
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false)
    const [user, setUser] = useState<IUser | null>(null)
    const [contactsClient, setContactsClient] = useState<IContact[] | undefined>()

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
            localStorage.setItem("@token", response.data.token)
            console.log(`TOKEN: ${response.data.token}`)
            const tokenDecode: IToken = jwtDecode(response.data.token)
            console.log(`IDUSER: ${tokenDecode}`)
            localStorage.setItem("@userId", tokenDecode.id)
            const userCapturado = await getClientById(String(localStorage.getItem("@userId")))
            toast.success("Usuário logado!")
            setUser(userCapturado)
            navigate("/dashboard")

        } catch (error) {
            toast.error("E-mail ou senha inválidos")
            console.error(error)
        }
    }
    console.log(`USER: ${user?.email}`)

    const verify = async () => {
        const token = localStorage.getItem("@token")

        if (!token) {
            navigate("/")
        }
        if (token) {
            if (user?.isAdmin) {
                navigate("dashboard_admin")
            } else {
                navigate("dashboard")
            }
        }
    }

    const updatedContacts = async () => {
        const token = localStorage.getItem("@token")
        if (token) {
            try {
                const userClient = await getAllContactsByUser(user!.id)
                setContactsClient(userClient)
            } catch (error) {
                console.error(error)
            }

        }
    }

    useEffect(() => {
        verify()
        updatedContacts()
    }, [, reload])


    const userLoggout = async () => {
        setUser(null);
        localStorage.removeItem("@token")
        localStorage.removeItem("@userId")
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ loading, reload, setLoading, setReload, user, userRegister, userLogin, userLoggout, contactsClient }}>
            {children}
        </UserContext.Provider>
    )
}