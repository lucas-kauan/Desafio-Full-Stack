import { useNavigate } from "react-router-dom";
import HeaderNavigation from "./style";


const Navigation = ({ setLoading }: any) => {

    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        setLoading(false)
        navigate("/");
    };

    return (
        <HeaderNavigation>
            <div>
                <p>Seja Bem vindo - <strong>Lucas Kauan</strong></p>
                <button onClick={() => logoutUser()}>Sair</button>
            </div>
        </HeaderNavigation>
    )

}
export default Navigation;