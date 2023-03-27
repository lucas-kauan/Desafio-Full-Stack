// import { useState } from "react";
import DeleteContactStyle from "./style";

const DeleteContactModal = ({ setModalDeleteContact }: any) => {


    return (
        <DeleteContactStyle>
            <div>
                <div className="question_delete">
                    <h2>Confirme a deleção</h2>
                    <button onClick={() => setModalDeleteContact(false)}>X</button>
                </div>
                <div className="buttons_question">
                    <button>Deletar</button>
                </div>
            </div>
        </DeleteContactStyle>
    )

}
export default DeleteContactModal;