import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import HeaderNavigation from "./style";


const Navigation = ({ setLoading }: any) => {

    const { user, userLoggout } = useContext(UserContext)

    return (
        <HeaderNavigation>
            <div>
                <p>Seja Bem vindo - <strong>{user?.name}</strong></p>
                <button onClick={() => userLoggout()}>Sair</button>
            </div>
        </HeaderNavigation>
    )

}
export default Navigation;