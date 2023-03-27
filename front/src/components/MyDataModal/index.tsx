// import { useState } from "react";
import MyDataStyle from "./style";

const MyDataModal = ({ setModalMyData }: any) => {

    return (
        <MyDataStyle>
            <div>
                <div>
                    <h2>Meus dados</h2>
                    <button onClick={() => setModalMyData(false)}>X</button>
                </div>
                <form action="">
                    <div>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <div>
                                <input type="text" placeholder={"lucas"} id="name" />
                                <button>Alterar</button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <div>
                                <input type="text" placeholder={"lucas@mail.com"} id="email" />
                                <button>Alterar</button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="telephone">Telefone</label>
                            <div>
                                <input type="text" placeholder={"(88) 98888-8888"} id="telephone" />
                                <button>Alterar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </MyDataStyle>
    )

}
export default MyDataModal;