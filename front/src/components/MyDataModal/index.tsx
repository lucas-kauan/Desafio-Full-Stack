// import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import MyDataStyle from "./style";

const MyDataModal = ({ setModalMyData }: any) => {

    const { user } = useContext(UserContext)


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
                                <input type="text" placeholder={user?.name} id="name" />
                                <button>Alterar</button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <div>
                                <input type="text" placeholder={user!.email} id="email" />
                                <button>Alterar</button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="telephone">Telefone</label>
                            <div>
                                <input type="text" placeholder={user!.telephone} id="telephone" />
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