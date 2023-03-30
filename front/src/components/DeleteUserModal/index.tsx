// import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import DeleteUserStyle from "./style";

const DeleteUserModal = ({ setModalDeleteUser }: any) => {

    const { deleteUserGlobal, clientGet } = useContext(UserContext)

    return (
        <DeleteUserStyle>
            <div>
                <div className="question_delete">
                    <h2>Confirme a deleção</h2>
                    <button onClick={() => setModalDeleteUser(false)}>X</button>
                </div>
                <div className="buttons_question">
                    <button onClick={() => {
                        deleteUserGlobal(clientGet!.id)
                        setModalDeleteUser(false)
                    }}>Deletar</button>
                </div>
            </div>
        </DeleteUserStyle>
    )

}
export default DeleteUserModal;