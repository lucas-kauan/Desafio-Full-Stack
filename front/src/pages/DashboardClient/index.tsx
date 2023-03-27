
import Navigation from "../../components/Navigation";
import PageClient from "./style";
import { AiOutlinePlus } from "react-icons/ai"
import { useContext, useState } from "react";
import UpdatedContactModal from "../../components/UpdatedContactModal";
import DeleteContactModal from "../../components/DeleteContactModal";
import { IContact, UserContext } from "../../providers/UserContext/UserContext";
import AddContactModal from "../../components/AddContactModal";
import MyDataModal from "../../components/MyDataModal";

const DashboardClient = () => {
    const { setLoading, user } = useContext(UserContext)

    const [modalContact, setModalContact] = useState(false)
    const [modalDeleteContact, setModalDeleteContact] = useState(false)
    const [modalAddContact, setModalAddContact] = useState(false)
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
        <PageClient>
            <Navigation setLoading={setLoading} />
            <div>
                <div className="nav_2">
                    <ul>
                        <li><button onClick={() => setModalMyData(true)}>Meus dados</button></li>
                        <li><button onClick={() => setModalDeleteContact(true)}>Deletar conta</button></li>
                    </ul>
                </div>
                <div className="add_contact">
                    <h2>Contatos</h2>
                    <AiOutlinePlus className="add_icon" onClick={() => setModalAddContact(true)} />
                </div>
                <div className="contacts">
                    <ul>
                        {/* {
                            contacts!.length > 0 ?
                                contacts!.map((element, index) => {
                                    return (
                                        <li className="contact" key={index}>
                                            <div>
                                                <p>Nome: {element.name}</p>
                                                <p>E-mail: {element.email}</p>
                                                <p>Telefone: {element.telephone}</p>
                                            </div>
                                            <div className="buttons_contact">
                                                <button onClick={() => setModalContact(true)}>Editar</button>
                                                <button onClick={() => setModalDeleteContact(true)}>Excluir</button>
                                            </div>
                                        </li>
                                    )
                                }) : clients!.map((element, index) => {
                                    return (
                                        <li className="contact" key={index}>
                                            <div>
                                                <p>Nome: {element.name}</p>
                                                <p>E-mail: {element.email}</p>
                                                <p>Telefone: {element.telephone}</p>
                                            </div>
                                            <div className="buttons_contact">
                                                <button onClick={() => setModalContact(true)}>Editar</button>
                                                <button onClick={() => setModalDeleteContact(true)}>Excluir</button>
                                            </div>
                                        </li>
                                    )
                                })
                        } */}
                    </ul>

                    <div>
                        <input type="text" placeholder="Pesquisar contato" onChange={inputValue} />
                        <button type="submit" onClick={() => searchContact(searchValue)}>Pesquisar</button>
                    </div>
                    {
                        modalContact ?
                            < UpdatedContactModal setModalContact={setModalContact} /> : null
                    }
                    {
                        modalDeleteContact ?
                            < DeleteContactModal setModalDeleteContact={setModalDeleteContact} /> : null
                    }
                    {
                        modalAddContact ?
                            <AddContactModal setModalAddContact={setModalAddContact} /> : null
                    }
                    {
                        modalMyData ?
                            <MyDataModal setModalMyData={setModalMyData} /> : null
                    }
                </div>
            </div>
        </PageClient>
    )
}
export default DashboardClient;


