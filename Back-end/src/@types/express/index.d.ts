import * as express from "express";
import { Client } from "../../entities/client.entity";
import { Musics } from "../../entities/musics.entities";
import { Playlists } from "../../entities/playlists.entities";
import { Users } from "../../entities/users.entities";
import { IUserPatchRequest, IUserRequest, IUserResponse } from "../../interfaces/users";

declare global {
    namespace Express {
        interface Request {
            user: IUserResponse
        }
    }
}