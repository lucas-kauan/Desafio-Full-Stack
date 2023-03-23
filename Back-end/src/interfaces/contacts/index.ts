export interface IContactRequest {
    name: string
    email: string
    telephone: string
}

export interface IContactResponse {
    id: string
    name: string
    email: string
    telephone: string
    createdAt: string
}

export interface IContactUpdate {
    name?: string
    email?: string
    telephone?: string
}