/* eslint-disable array-callback-return */
import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import DeleteContactModal from "../DeleteContactModal"
import UpdatedContactModal from "../UpdatedContactModal"

const ListContactsClientDashboard = () => {
    const { contactsClient, setModalContact, setIdContact, setModalDeleteContact, modalContact, modalDeleteContact, setUserSelected } = useContext(UserContext)

    const render = () => {
        return (
            contactsClient!.map((element, index) => {
                if (element.isActive) {
                    return (
                        <li className="contact" key={index}>
                            <div>
                                <p>Nome: {element.name}</p>
                                <p>E-mail: {element.email}</p>
                                <p>Telefone: {element.telephone}</p>
                            </div>
                            <div className="buttons_contact">
                                <button onClick={() => {
                                    setIdContact(element.id)
                                    setModalContact(true)
                                }}>Editar</button>
                                <button onClick={() => {
                                    setIdContact(element.id)
                                    setModalDeleteContact(true)
                                }}>Excluir</button>
                            </div>
                        </li>
                    )
                }
            })
        )
    }

    useEffect(() => {

    }, [contactsClient])

    return (
        <>
            {
                render()
            }
            {
                modalContact ?
                    < UpdatedContactModal setModalContact={setModalContact} /> : null
            }
            {
                modalDeleteContact ?
                    < DeleteContactModal setModalDeleteContact={setModalDeleteContact} /> : null
            }
        </>
    )
}

export default ListContactsClientDashboard