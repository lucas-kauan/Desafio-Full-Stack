// import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import DeleteContactStyle from "./style";

const DeleteContactModal = ({ setModalDeleteContact }: any) => {

    const { deleteContactGlobal, idContact } = useContext(UserContext)

    return (
        <DeleteContactStyle>
            <div>
                <div className="question_delete">
                    <h2>Confirme a deleção</h2>
                    <button onClick={() => setModalDeleteContact(false)}>X</button>
                </div>
                <div className="buttons_question">
                    <button onClick={() => {
                        deleteContactGlobal(idContact)
                        setModalDeleteContact(false)
                    }}>Deletar</button>
                </div>
            </div>
        </DeleteContactStyle>
    )

}
export default DeleteContactModal;