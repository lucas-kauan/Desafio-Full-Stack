// import { useState } from "react";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContactByUserId, createUser } from "../../services/users/requests";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { toast } from "react-toastify";
import CreateUserStyle from "./style";

const schema = yup.object({
    password: yup.string().notRequired(),
    email: yup
        .string()
        .email().notRequired(),
    name: yup.string().notRequired(),
});

export interface IUserCreate {
    name: string
    email: string
    password: string
    telephone: string
}

const CreateUserModal = ({ setModalCreateUser }: any) => {

    const { setLoading } = useContext(UserContext)

    const bodyCreate = async (formData: IUserCreate) => {
        try {
            await createUser(formData)
            toast.success("Usuário criado!")
            setLoading(true)
            setModalCreateUser(false)
        } catch (error) {
            console.error(error)
        }
    }

    const {
        register,
        handleSubmit,
    } = useForm<IUserCreate>({
        resolver: yupResolver(schema),
    });

    const submit: SubmitHandler<IUserCreate> = (formData) => {
        bodyCreate(formData)
    }

    return (

        <CreateUserStyle>
            <div>
                <div>
                    <h2>Criar usuário</h2>
                    <button onClick={() => setModalCreateUser(false)}>X</button>
                </div>
                <form action="" onSubmit={handleSubmit(submit)}>
                    <div>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input type="text" placeholder="Insira um nome" id="name" {...register("name")} />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" placeholder="Insira um e-mail" id="email" {...register("email")} />
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" placeholder="Insira uma senha" id="password" {...register("password")} />
                        </div>
                        <div>
                            <label htmlFor="telephone">Telefone</label>
                            <input type="text" placeholder="Insira um telefone" id="telephone" {...register("telephone")} />
                        </div>
                    </div>
                    <div>
                        <button type="submit" >Cadastrar contato</button>
                    </div>
                </form>
            </div>
        </CreateUserStyle>
    )

}
export default CreateUserModal;