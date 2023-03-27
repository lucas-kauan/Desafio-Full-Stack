import styled from "styled-components";

const PageClient = styled.div`
    background-color: var(--grey-1);
    width: 100vw;
    min-height: 100vh; 

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        
        > .nav_2 {
            display: flex;
            justify-content: center;
            width: 900px;
            margin-top: 100px;

            > ul {
                /* width: 150px; */
                display: flex;
                justify-content: space-between;
                margin-top: 50px;
                width: 350px;
                
                > li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    > button {
                        height: 50px;
                        width: 150px;
                        font-size: 20px;
                        font-weight: 600;
                        border: none;
                        border-radius: 3px;
                        margin-bottom: 20px;
                        background-color: var(--color-primary);
                        color: var(--grey-1);
                    }
                }
            }
        }

        .add_contact {
            display: flex;
            align-items: center;
            height: 50px;
            margin: 20px 0 30px 0;

            > h2 {
                color: var(--grey-2);
                margin-right: 10px;
            }

            > .add_icon {
                border: none;
                border-radius: 3px;
                background-color: var(--color-primary);
                font-size: 25px;
                font-weight: 600;
            }
        }

        > h2 {
            color: var(--grey-2);
        }
        
        .contacts {
            display: flex;
            justify-content: space-between;
            width: 900px;
            margin: 0;

            > ul {
                display: flex;
                flex-wrap: wrap;
                width: 65%;
                justify-content: space-between;
                margin: 0;
    
                > li {
                    display: list-item;
                    background-color: var(--color-primary);
                    padding: 20px;
                    margin-bottom: 30px;
                    width: 280px;

                    .buttons_contact {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 15px;

                        button {
                            width: 100px;
                            height: 30px;
                            font-size: 18px;
                            font-weight: 600;
                            border: none;
                            border-radius: 3px;
                            background-color: var(--grey-1);
                            color: var(--color-light);
                        }
                    }

                    p {
                        margin-bottom: 5px;
                        font-size: 20px;
                    }
                }
            }

            > div {
                width: 30%;
                display: flex;
                justify-content: space-between;

                > input {
                    width: 180px;
                    height: 50px;
                    border: none;
                    border-radius: 3px;
                    padding-left: 10px;
                    font-size: 18px;
                }

                > button {
                    width: 75px;
                    height: 50px;
                    border: none;
                    border-radius: 3px;
                    font-size: 13px;
                    font-weight: 600;
                    background-color: var(--color-primary);
                }
            }
        }

    }
`
export default PageClient;