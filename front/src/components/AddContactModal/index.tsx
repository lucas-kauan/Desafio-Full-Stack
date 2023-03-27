// import { useState } from "react";
import AddContactStyle from "./style";

const AddContactModal = ({ setModalAddContact }: any) => {

    return (
        <AddContactStyle>
            <div>
                <div>
                    <h2>Adicionando contato</h2>
                    <button onClick={() => setModalAddContact(false)}>X</button>
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
                        <button>Cadastrar contato</button>
                    </div>
                </form>
            </div>
        </AddContactStyle>
    )

}
export default AddContactModal;