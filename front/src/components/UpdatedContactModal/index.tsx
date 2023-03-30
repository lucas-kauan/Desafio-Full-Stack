/* eslint-disable array-callback-return */
// import { useState } from "react";
import UpdatedContactStyle from "./style";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactUpdate } from "../../services/contacts/interface";
import { updateContactById } from "../../services/contacts/requests";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { toast } from "react-toastify";

const schema = yup.object({
    telephone: yup.string().notRequired(),
    email: yup
        .string()
        .email().notRequired(),
    name: yup.string().notRequired(),
});

const UpdatedContactModal = ({ setModalContact }: any) => {

    const { idContact, userSelected } = useContext(UserContext)

    const bodyUpdate = async (formData: IContactUpdate) => {

        userSelected!.contacts.filter((el) => {
            if (el.id === idContact) {

                if (formData.name === "") {
                    formData.name = el.name
                }
                if (formData.email === "") {
                    formData.email = el.email
                }
                if (formData.telephone === "") {
                    formData.telephone = el.telephone
                }

            }
        })

        try {
            await updateContactById(idContact, formData)
            toast.success("Informações alteradas")
            setModalContact(false)
        } catch (error) {
            console.error(error)
        }
    }

    const {
        register,
        handleSubmit,
    } = useForm<IContactUpdate>({
        resolver: yupResolver(schema),
    });

    const submit: SubmitHandler<IContactUpdate> = (formData) => {
        bodyUpdate(formData)
    }

    return (
        <UpdatedContactStyle>
            <div>
                <div>
                    <h2>Alterando contato</h2>
                    <button onClick={() => setModalContact(false)}>X</button>
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
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </UpdatedContactStyle>
    )

}
export default UpdatedContactModal;