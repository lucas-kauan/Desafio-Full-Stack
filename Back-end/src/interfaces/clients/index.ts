export interface IClientRequest {
    name: string
    email: string
    password: string
    telephone: string
}

export interface IClientResponse {
    id: string
    name: string
    email: string
    telephone: string
    isActive: boolean
    isAdmin: boolean
    createdAt: string
}

export interface IClientUpdate {
    name?: string
    email?: string
    password?: string
    telephone?: string
}
