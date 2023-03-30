// import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import MyDataStyle from "./style";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserUpdate } from "../../services/users/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserById } from "../../services/users/requests";
import { toast } from "react-toastify";

const schema = yup.object({
    telephone: yup.string().notRequired(),
    password: yup.string().notRequired(),
    email: yup
        .string()
        .email().notRequired(),
    name: yup.string().notRequired(),
});

const MyDataModal = ({ setModalMyData }: any) => {

    const { user } = useContext(UserContext)

    const bodyUpdate = async (formData: IUserUpdate) => {
        let userUpdate = {}
        if (formData.name !== "") {
            userUpdate = {
                name: formData.name
            }
            await updateUserById(user!.id, userUpdate)
            toast.success("Nome alterado!")
        }
        if (formData.email !== "") {
            userUpdate = {
                email: formData.email
            }
            await updateUserById(user!.id, userUpdate)
            toast.success("E-mail alterado!")
        }
        if (formData.password !== "") {
            userUpdate = {
                password: formData.password
            }
            await updateUserById(user!.id, userUpdate)
            toast.success("Senha alterada!")
        }
        if (formData.telephone !== "") {
            userUpdate = {
                telephone: formData.telephone
            }
            await updateUserById(user!.id, userUpdate)
            toast.success("Telefone alterado!")
        }
    }

    const {
        register,
        handleSubmit,
    } = useForm<IUserUpdate>({
        resolver: yupResolver(schema),
    });

    const submit: SubmitHandler<IUserUpdate> = (formData) => {
        bodyUpdate(formData)
    }

    return (
        <MyDataStyle>
            <div>
                <div>
                    <h2>Meus dados</h2>
                    <button onClick={() => setModalMyData(false)}>X</button>
                </div>
                <form action="" onSubmit={handleSubmit(submit)}>
                    <div>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <div>
                                <input type="text" placeholder={user!.name} id="name" {...register("name")} />
                                <button type="submit">Alterar</button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <div>
                                <input type="text" placeholder={user!.email} id="email" {...register("email")} />
                                <button type="submit">Alterar</button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <div>
                                <input type="text" placeholder="Alterar senha" id="password" {...register("password")} />
                                <button type="submit">Alterar</button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="telephone">Telefone</label>
                            <div>
                                <input type="text" placeholder={user!.telephone} id="telephone" {...register("telephone")} />
                                <button type="submit">Alterar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </MyDataStyle>
    )
}
export default MyDataModal;