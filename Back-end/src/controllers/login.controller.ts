import { Request, Response } from "express";

import { IUserLogin } from "../interfaces/login";
import loginService from "../services/login.service";

const createLoginController = async (req: Request, res: Response) => {

    const sessionData: IUserLogin = req.body
    const data = await loginService(sessionData)
    return res.status(200).json(data)

}

export default createLoginController