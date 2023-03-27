export interface IGetUserInfo {
    id: string
    name: string
    email: string
    password?: string
    telephone: string
    isActive: boolean
    isAdmin: boolean
    createdAt: string
}