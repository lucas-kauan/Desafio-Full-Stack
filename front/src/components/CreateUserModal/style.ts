import styled from "styled-components";

const CreateUserStyle = styled.header`
    background-color: rgba(18, 18, 20, 0.5);
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        padding: 30px;
        width: 400px;
        background-color: var(--color-light);
        border-radius: 3px;

        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;

            > h2 {
                color: var(--grey-1);
            }

            > button {
                width: 30px;
                height: 30px;
                color: var(--grey-1);
                background-color: transparent;
                border: none; 
                font-size: 30px;
            }
        }
        > form {
            height:90% ;
    
            > div {
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: space-between;

                > div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 70px;
                    margin-bottom: 20px;

                    > label {
                        color: var(--grey-1);
                        font-size: 16px;
                        font-weight: 600;
                    }

                    > input {
                        height: 50px;
                        font-size: 15px;
                        font-weight: 600;
                        border: none;
                        border-radius: 3px;
                        padding-left: 10px;
                    }
                }
            }

            button {
                height: 50px;
                color: var(--grey-1);
                background-color: var(--color-primary);
                border: none;
                border-radius: 3px;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }


`
export default CreateUserStyle;