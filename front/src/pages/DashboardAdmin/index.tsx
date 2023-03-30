import Navigation from "../../components/Navigation";
import { useContext, useEffect, useState } from "react";
import PageAdmin from "./style";
import api from "../../services/api";
import { IContact, IUser, UserContext } from "../../providers/UserContext/UserContext";
import { getAllContactsByUser } from "../../services/contacts/requests";
import ClientDataModal from "../../components/ModalDataClient";
import { deleteUserById } from "../../services/users/requests";
import { toast } from "react-toastify";

const DashboardAdmin = () => {

    const [modalMyData, setModalMyData] = useState(false)
    const [usersList, setUsersList] = useState<IUser[]>()
    const [contactsList, setContactsList] = useState<IContact[] | null>(null)
    const [userSelected, setUserSelected] = useState<IUser>()

    const { setLoading, loading, setClientGet, setModalDeleteContact } = useContext(UserContext)


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

    const deleteUser = async (id: string) => {
        try {
            await deleteUserById(id)
            setModalDeleteContact(true)
            toast.success("Usuário deletado!")
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
                                        setLoading(true)
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
                                                                setModalMyData(true)
                                                            }}>Editar contato</button>
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
                                                            <div className="button_clients">
                                                                <button onClick={() => {
                                                                    setUserSelected(element)
                                                                    getContactsUser(element.id)
                                                                    setLoading(true)
                                                                }}>Visualizar contatos</button>
                                                                <button onClick={() => {
                                                                    deleteUser(element.id)
                                                                }}>Deletar cliente</button>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="contacts">
                                        <h2>{contactsList ? `Contatos de ${userSelected?.name}` : null}</h2>
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
                                                                                <label htmlFor="">Nome</label>
                                                                                <input type="text" placeholder={element.name} />
                                                                            </div>
                                                                            <button>Alterar</button>
                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                <label htmlFor="">E-mail</label>
                                                                                <input type="text" placeholder={element.email} />
                                                                            </div>
                                                                            <button>Alterar</button>
                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                <label htmlFor="">Telefone</label>
                                                                                <input type="text" placeholder={element.telephone} />
                                                                            </div>
                                                                            <button>Alterar</button>
                                                                        </div>
                                                                        <div className="button_delete">
                                                                            <button>Deletar</button>
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
                            modalMyData ?
                                <ClientDataModal setModalMyData={setModalMyData} /> : null
                        }
                    </PageAdmin>
            }
        </>
    )
}
export default DashboardAdmin;


