import { useContext, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiKey } from "react-icons/fi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import PageLogin from "./style";
import { ILoginFormValues, UserContext } from "../../providers/UserContext/UserContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

const schema = yup.object({
    email: yup
        .string()
        .email("Deve ser um e-mail válido")
        .required("E-mail é obrigatório"),
    password: yup.string().required("Insira sua senha"),
});

const Login = () => {

    const [viewPassword, setViewPassword] = useState(false);
    const [typeInputPassword, setTypeInputPassword] = useState("password");

    const {
        register,
        handleSubmit,
    } = useForm<ILoginFormValues>({
        resolver: yupResolver(schema),
    });
    const { userLogin } = useContext(UserContext)
    const submit: SubmitHandler<ILoginFormValues> = (formData) => {
        userLogin(formData)
    }


    return (
        <PageLogin>
            <div>
                <div>
                    <p>Bem vindo a</p>
                    <h1>Kenzie Agendas</h1>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="div_input">
                        <CiMail className="figure_input" />
                        <div>
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                placeholder="Insira seu e-mail"
                                {...register("email")}
                            />
                        </div>
                    </div>
                    <div className="div_input">
                        <FiKey className="figure_input" />
                        <div>
                            <label htmlFor="">Senha</label>
                            <input
                                type={typeInputPassword}
                                placeholder="Insira sua senha"
                                {...register("password")}
                            />
                        </div>
                        <span className="password-icon"
                            onClick={(event) => {
                                event.preventDefault();
                                if (viewPassword === true) {
                                    setViewPassword(false);
                                    setTypeInputPassword("password");
                                } else {
                                    setViewPassword(true);
                                    setTypeInputPassword("text");
                                }
                            }}
                        >
                            {viewPassword === false ? (
                                <BsEyeSlash className="figure_view" />
                            ) : (
                                <BsEye className="figure_view" />
                            )}
                        </span>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </PageLogin >
    )
}
export default Login;


