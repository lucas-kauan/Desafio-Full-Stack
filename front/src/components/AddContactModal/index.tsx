// import { useState } from "react";
import AddContactStyle from "./style";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactCreate } from "../../services/contacts/interface";
import { createContactByUserId } from "../../services/users/requests";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { toast } from "react-toastify";

const schema = yup.object({
    password: yup.string().notRequired(),
    email: yup
        .string()
        .email().notRequired(),
    name: yup.string().notRequired(),
});

const AddContactModal = ({ setModalAddContact }: any) => {

    const { user, setLoading } = useContext(UserContext)

    const bodyCreate = async (formData: IContactCreate) => {
        try {
            await createContactByUserId(user!.id, formData)
            toast.success("Contato criado!")
            setLoading(true)
            setModalAddContact(false)
        } catch (error) {
            console.error(error)
        }
    }

    const {
        register,
        handleSubmit,
    } = useForm<IContactCreate>({
        resolver: yupResolver(schema),
    });

    const submit: SubmitHandler<IContactCreate> = (formData) => {
        bodyCreate(formData)
    }

    return (
        <AddContactStyle>
            <div>
                <div>
                    <h2>Adicionando contato</h2>
                    <button onClick={() => setModalAddContact(false)}>X</button>
                </div>
                <form action="" onSubmit={handleSubmit(submit)}>
                    <div>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input type="text" placeholder="Insira um nome" id="name" {...register("name")} />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" placeholder="Insira um e-mail" id="email" {...register("email")} />
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
        </AddContactStyle>
    )

}
export default AddContactModal;