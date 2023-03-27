// import { useState } from "react";
import UpdatedContactStyle from "./style";

const UpdatedContactModal = ({ setModalContact }: any) => {

    return (
        <UpdatedContactStyle>
            <div>
                <div>
                    <h2>Alterando contato</h2>
                    <button onClick={() => setModalContact(false)}>X</button>
                </div>
                <form action="">
                    <div>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input type="text" placeholder="Insira um nome" id="name" />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" placeholder="Insira um e-mail" id="email" />
                        </div>
                        <div>
                            <label htmlFor="telephone">Telefone</label>
                            <input type="text" placeholder="Insira um telefone" id="telephone" />
                        </div>
                    </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </UpdatedContactStyle>
    )

}
export default UpdatedContactModal;