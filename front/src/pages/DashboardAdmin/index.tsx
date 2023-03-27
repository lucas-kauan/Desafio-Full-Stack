import Navigation from "../../components/Navigation";
import { useState } from "react";
import UpdatedContactModal from "../../components/UpdatedContactModal";
import DeleteContactModal from "../../components/DeleteContactModal";
import AddContactModal from "../../components/AddContactModal";
import MyDataModal from "../../components/MyDataModal";
import PageAdmin from "./style";

const DashboardAdmin = () => {

    const [modalMyData, setModalMyData] = useState(false)

    const [searchValue, setSearchValue] = useState("")
    // const [clients, setClients] = useState<IContact[] | null>(user!.contacts)
    // const [contacts, setContacts] = useState<IContact[] | null>(user!.contacts)

    const inputValue = (event: any) => {
        setSearchValue(event.target.value)
    }

    const searchContact = (search: string) => {
        // const contacts = user!.contacts.filter(el => el.name.toLowerCase().includes(search))
        // if (contacts.length > 0) {
        //     setContacts(contacts)
        // }
        // setClients(user!.contacts)
    }

    return (
        <PageAdmin>
            <Navigation />
            <div>
                <div className="nav_2">
                    <ul>
                        <li><button onClick={() => setModalMyData(true)}>Meus dados</button></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <div className="clients">
                            <h2>Lista de clientes</h2>
                            <div>
                                <input type="text" placeholder="Pesquisar (nome, e-mail ou telefone)" />
                                <button>Pesquisar</button>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <div>
                                            <label htmlFor="">Nome</label>
                                            <input type="text" placeholder={"Lucas"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">E-mail</label>
                                            <input type="text" placeholder={"lucas@mail.com"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">Telefone</label>
                                            <input type="text" placeholder={"(88) 98888-8888"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div className="button_clients">
                                        <button>Visualizar contatos</button>
                                        <button>Deletar usuário</button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div>
                                            <label htmlFor="">Nome</label>
                                            <input type="text" placeholder={"Lucas"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">E-mail</label>
                                            <input type="text" placeholder={"lucas@mail.com"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">Telefone</label>
                                            <input type="text" placeholder={"(88) 98888-8888"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div className="button_clients">
                                        <button>Visualizar contatos</button>
                                        <button>Deletar usuário</button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <div>
                                            <label htmlFor="">Nome</label>
                                            <input type="text" placeholder={"Lucas"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">E-mail</label>
                                            <input type="text" placeholder={"lucas@mail.com"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">Telefone</label>
                                            <input type="text" placeholder={"(88) 98888-8888"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div className="button_clients">
                                        <button>Visualizar contatos</button>
                                        <button>Deletar usuário</button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="contacts">
                            <h2>Contatos de Lucas</h2>
                            <div>
                                <input type="text" placeholder="Pesquisar (nome, contato, email)" />
                                <button type="submit">Pesquisar</button>
                            </div>

                            <ul>
                                <li>
                                    <div>
                                        <div>
                                            <label htmlFor="">Nome</label>
                                            <input type="text" placeholder={"Crystal"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">E-mail</label>
                                            <input type="text" placeholder={"crystal@mail.com"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">Telefone</label>
                                            <input type="text" placeholder={"(88) 98888-8888"} />
                                        </div>
                                        <button>Alterar</button>
                                    </div>
                                    <div className="button_delete">
                                        <button>Deletar</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalMyData ?
                    <MyDataModal setModalMyData={setModalMyData} /> : null
            }
        </PageAdmin>
    )
}
export default DashboardAdmin;


