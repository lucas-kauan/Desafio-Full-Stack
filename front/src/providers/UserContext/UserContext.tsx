/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import api from "../../services/api"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deleteContactById } from "../../services/contacts/requests";
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
    isActive: boolean
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

export interface IUserContext {
    loading: boolean
    reload: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setReload: React.Dispatch<React.SetStateAction<boolean>>
    user: IUser | null
    userRegister: (formData: IRegisterFormValues) => Promise<void>
    userLogin: (formData: ILoginFormValues) => Promise<void>
    userLoggout: () => Promise<void>
    contactsClient: IContact[] | null
    setModalContact: React.Dispatch<React.SetStateAction<boolean>>
    modalContact: boolean
    setModalDeleteContact: React.Dispatch<React.SetStateAction<boolean>>
    modalDeleteContact: boolean
    deleteContactGlobal: (id: string) => void
    setIdContact: React.Dispatch<React.SetStateAction<string>>
    idContact: string
    setClientGet: React.Dispatch<React.SetStateAction<IUser | null>>
    clientGet: IUser | null
}

interface IToken {
    exp: number
    iat: number
    id: string
    sub: string
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)
    const [user, setUser] = useState<IUser | null>(null)
    const [contactsClient, setContactsClient] = useState<IContact[] | null>(null)
    const [modalContact, setModalContact] = useState(false)
    const [modalDeleteContact, setModalDeleteContact] = useState(false)
    const [idContact, setIdContact] = useState("")
    const [clientGet, setClientGet] = useState<IUser | null>(null)

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

            const response = await api.post("login", formData)
            localStorage.setItem("@token", response.data.token)

            const tokenDecode: IToken = jwtDecode(response.data.token)

            localStorage.setItem("@userId", tokenDecode.id)

            const userCapturado = await getClientById(tokenDecode.id)
            setUser(userCapturado)
            toast.success("Usuário logado!")
            setLoading(true)

        } catch (error) {
            toast.error("E-mail ou senha inválidos")
            console.error(error)
        }
    }


    const verify = async () => {
        const token = localStorage.getItem("@token")
        let userCapture = user
        if (token) {
            userCapture = await getClientById(localStorage.getItem("@userId")!)
        }

        try {
            if (!token) {
                navigate("/")
            } else if (userCapture!.isAdmin) {
                setUser(userCapture)
                navigate("dashboard_admin")
            } else {
                setUser(userCapture)
                setContactsClient(userCapture!.contacts)
                navigate("dashboard")
            }

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const deleteContactGlobal = (id: string) => {
        try {
            deleteContactById(id)
            toast.success("Contato deletado")
        } catch (error) {
            console.error(error)
        } finally {
            setTimeout(() => {
                setLoading(true)
            }, 300);
        }
    }

    useEffect(() => {
        verify()
    }, [loading])

    const userLoggout = async () => {
        setUser(null);
        localStorage.removeItem("@token")
        localStorage.removeItem("@userId")
        navigate("/")
    }

    return (
        <UserContext.Provider value={{
            loading,
            reload,
            setLoading,
            setReload,
            user,
            userRegister,
            userLogin,
            userLoggout,
            contactsClient,
            setModalContact,
            modalContact,
            setModalDeleteContact,
            modalDeleteContact,
            deleteContactGlobal,
            setIdContact,
            idContact,
            setClientGet,
            clientGet
        }}>
            {children}
        </UserContext.Provider>
    )
}
