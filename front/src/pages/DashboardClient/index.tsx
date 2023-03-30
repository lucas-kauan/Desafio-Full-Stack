import Navigation from "../../components/Navigation";
import PageClient from "./style";
import { AiOutlinePlus } from "react-icons/ai"
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import AddContactModal from "../../components/AddContactModal";
import MyDataModal from "../../components/MyDataModal";
import ListContactsClientDashboard from "../../components/ListContactsClientDashboard";
import { deleteUserById } from "../../services/users/requests";
import { useNavigate } from "react-router-dom";

const DashboardClient = () => {

    const { setLoading, setReload, loading, user, setModalDeleteContact } = useContext(UserContext)
    const [modalAddContact, setModalAddContact] = useState(false)
    const [modalMyData, setModalMyData] = useState(false)
    const navigate = useNavigate()

    const deleteUser = async () => {
        try {
            await deleteUserById(user!.id)
            setModalDeleteContact(true)
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {
                loading ? <h1>Loading</h1> :
                    <PageClient>
                        <Navigation setLoading={setLoading} />
                        <div>
                            <div className="nav_2">
                                <ul>
                                    <li><button onClick={() => setModalMyData(true)}>Meus dados</button></li>
                                    <li><button onClick={async () => deleteUser()}>Deletar conta</button></li>
                                </ul>
                            </div>
                            <div className="add_contact">
                                <h2>Contatos</h2>
                                <AiOutlinePlus className="add_icon" onClick={() => {
                                    setModalAddContact(true)
                                    setReload(true)
                                }} />
                            </div>
                            <div className="contacts">
                                <ul>
                                    <ListContactsClientDashboard />
                                </ul>
                            </div>
                        </div>
                        {
                            modalAddContact ?
                                <AddContactModal setModalAddContact={setModalAddContact} /> : null
                        }
                        {
                            modalMyData ?
                                <MyDataModal setModalMyData={setModalMyData} /> : null
                        }
                    </PageClient>
            }
        </>

    )
}
export default DashboardClient;


