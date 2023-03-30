import styled from "styled-components";

const DeleteUserStyle = styled.header`
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

        > .question_delete {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;

            > h2 {
                font-size: 30px;
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
        
        > .buttons_question {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;

            button {
                width: 100px;
                height: 50px;
                font-size: 20px;
                font-weight: 600;
                border: none;
                border-radius: 3px;
                background-color: var(--color-primary);
            }
        }
    }


`
export default DeleteUserStyle;