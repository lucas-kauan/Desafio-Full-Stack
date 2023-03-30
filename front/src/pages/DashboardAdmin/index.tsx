import Navigation from "../../components/Navigation";
import { useContext, useEffect, useState } from "react";
import PageAdmin from "./style";
import api from "../../services/api";
import { IContact, IUser, UserContext } from "../../providers/UserContext/UserContext";
import { getAllContactsByUser } from "../../services/contacts/requests";
import ClientDataModal from "../../components/ModalDataClient";
import { deleteUserById } from "../../services/users/requests";
import { toast } from "react-toastify";
import MyDataModal from "../../components/MyDataModal";
import UpdatedContactModal from "../../components/UpdatedContactModal";
import DeleteContactModal from "../../components/DeleteContactModal";
import DeleteUserModal from "../../components/DeleteUserModal";

const DashboardAdmin = () => {

    const [modalMyData, setModalMyData] = useState(false)
    const [modalClientData, setModalClientData] = useState(false)
    const [usersList, setUsersList] = useState<IUser[]>()
    const [contactsList, setContactsList] = useState<IContact[] | null>(null)
    const [modalDeleteUser, setModalDeleteUser] = useState(false)

    const { setLoading, loading, setClientGet, setModalDeleteContact, modalDeleteContact, setModalContact, modalContact, setIdContact, setUserSelected, userSelected } = useContext(UserContext)


    const getAllUsers = async () => {
        const token = localStorage.getItem("@token")
        if (token) {
            const { data } = await api.get(`users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setUsersList(data)
        }
    }

    const getContactsUser = async (id: string) => {
        try {
            const allContacts = await getAllContactsByUser(id)
            setContactsList(allContacts)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [contactsList, loading])

    return (
        <>
            {
                loading ? <h1>Loading</h1> :
                    <PageAdmin>
                        <Navigation setLoading={setLoading} />
                        <div>
                            <div className="nav_2">
                                <ul>
                                    <li><button onClick={() => {
                                        setModalMyData(true)
                                    }}>Meus dados</button></li>
                                </ul>
                            </div>
                            <div>
                                <div>
                                    <div className="clients">
                                        <h2>Lista de clientes</h2>
                                        <ul>
                                            {usersList &&
                                                usersList!.map((element, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <button onClick={() => {
                                                                setClientGet(element)
                                                                setModalClientData(true)
                                                            }}>Editar cliente</button>
                                                            <div>
                                                                <div>
                                                                    <h3>Nome:</h3>
                                                                    <h3>{element.name}</h3>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <h3>E-mail:</h3>
                                                                    <h3>{element.email}</h3>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div >
                                                                    <h3>Telefone:</h3>
                                                                    <h3>{element.telephone}</h3>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <h3>Usuário {element.isActive ? "ativo" : "desativado"}</h3>
                                                                </div>
                                                            </div>
                                                            <div className="button_clients">
                                                                <button onClick={() => {
                                                                    setUserSelected(element)
                                                                    getContactsUser(element.id)
                                                                    setLoading(true)
                                                                }}>Visualizar contatos</button>
                                                                <button onClick={() => {
                                                                    setClientGet(element)
                                                                    setModalDeleteUser(true)
                                                                }}>Deletar cliente</button>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="contacts">
                                        <h2>{userSelected ? `Contatos de ${userSelected?.name}` : null}</h2>
                                        {
                                            contactsList ?
                                                <>
                                                    <ul>
                                                        {
                                                            contactsList!.map((element, index) => {
                                                                return (
                                                                    <li key={index}>
                                                                        <div>
                                                                            <div>
                                                                                <h3>Nome:</h3>
                                                                                <h3>{element.name}</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                <h3>E-mail:</h3>
                                                                                <h3>{element.email}</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div >
                                                                                <h3>Telefone:</h3>
                                                                                <h3>{element.telephone}</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                <h3>Usuário {element.isActive ? "ativo" : "desativado"}</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="buttons_contacts">
                                                                            <button onClick={() => {
                                                                                setIdContact(element.id)
                                                                                setModalContact(true)
                                                                            }}>Editar contato</button>
                                                                            <button onClick={() => {
                                                                                setModalDeleteContact(true)
                                                                                setIdContact(element.id)
                                                                            }}>Deletar contato</button>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>

                                                </> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            modalClientData ?
                                <ClientDataModal setModalClientData={setModalClientData} /> : null
                        }
                        {
                            modalMyData ?
                                <MyDataModal setModalMyData={setModalMyData} /> : null
                        }
                        {

                            modalContact ?
                                <UpdatedContactModal setModalContact={setModalContact} /> : null

                        }
                        {
                            modalDeleteContact ?
                                < DeleteContactModal setModalDeleteContact={setModalDeleteContact} /> : null
                        }
                        {
                            modalDeleteUser ?
                                < DeleteUserModal setModalDeleteUser={setModalDeleteUser} /> : null
                        }
                    </PageAdmin>
            }
        </>
    )
}
export default DashboardAdmin;


