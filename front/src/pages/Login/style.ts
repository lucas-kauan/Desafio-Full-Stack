import styled from "styled-components";

const PageLogin = styled.div`
    background-color: var(--grey-1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    
    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 550px;
        height: 550px;
        
        > div {
            > p {
                font-weight: 400;
                font-size: 3rem;
                color: var(--color-light);
            }

            > h1 {
                font-weight: 900;
                font-size: 3rem;
                color: var(--color-primary);
            }

        }

        form{
            height: 63%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            button {
                width: 100%;
                height: 80px;
                margin-top: 60px;

                font-weight: 900;
                font-size: 22px;

                color: var(--grey-1);
                background-color: var(--color-primary);

                border-radius: 10px;
                border: transparent;    
            }
        }
    }

    .div_input {

        width: 100%;
        position: relative;

        div {
            
            label {
                position: absolute;
                left: 55px;
                top: 10px;

                font-weight: 700;
                font-size: 12px;
                
            }

            input {
                width: 100%;
                height: 60px;

                padding-left: 55px;
                padding-right: 55px;
                padding-top: 15px;
                
                background-color: var(--grey-4);

                border: transparent;
                border-radius: 10px;

                font-weight: 700;
                font-size: 18px;
                
            }

            input::placeholder {
                color: var(--grey-2);
            }

            span {
                margin-left: 20px;
                margin-top: 5px;

                font-size: 13px;

                color: #f14d4d;
            }

        }

        .span_email{
            margin-bottom: 34px;
        }

        .figure_input {
            position: absolute;

            font-size: 26px;

            left: 15px;
            top: 16px;
        }

        .password-icon {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 36px;
            height: 36px;
            margin: 0;
            position: absolute;
            cursor: pointer;

            top: 12px;
            right: 15px;
            background-color: transparent;

            .figure_view {
                font-size: 25px;
                color: var(--grey-1);
            }
        }
    }

    .div_keep_logged {
        display: flex;
        flex-direction: row;

        align-items: center;

        margin: 0;
        margin-top: 19px;

        div {
            display: flex;
            justify-content: center;
            align-items: center;

            margin: 0;
            width: 25px;
            height: 25px;

            background-color: var(--grey-3);

            border-radius: 8px;

            cursor: pointer;

            .figure_check {
                font-size: 26px;
                
            }
        }

        p {
            font-weight: 700;
            font-size: 18px;
            margin-left: 10px;
        }
    }
    
`
export default PageLogin;