import styled from "styled-components";

const PageAdmin = styled.div`
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
            margin-top: 50px;

            > ul {
                /* width: 150px; */
                display: flex;
                justify-content: center;
                margin-top: 50px;
                width: 350px;
                
                > li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    > button {
                        height: 40px;
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
        
        .clients {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: 900px;
            margin: 0;
            margin-top: 30px;

            > h2 {
                text-align: center;
                color: var(--color-primary);
                margin-bottom: 30px;
            }

            > ul {
                display: flex;
                overflow: auto;
                margin-top: 30px;
                gap: 50px;
                padding-bottom: 20px;
                
                li {
                    display: flex;
                    height: 385px;
                    min-width: 390px;
                    padding: 20px;
                    flex-direction: column;
                    justify-content: space-between;
                    background-color: var(--color-primary);
                    border-radius: 3px;

                    > button {
                        width: 100%;
                        height: 40px;
                        font-size: 15px;
                        font-weight: 600;
                        color: var(--color-primary);
                        background-color: var(--grey-1);
                        border: none;
                        border-radius: 3px;
                    }
                    
                    div {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 60px;
                        width: 100%;
                        
                        > div {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            > h3 {
                                margin-right: 20px;
                            }
                        
                        }
                    }

                    > .button_clients {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 60px;

                        > button {
                            width: 45%;
                            height: 40px;
                            font-size: 15px;
                            font-weight: 600;
                            color: var(--color-primary);
                            background-color: var(--grey-1);
                            border: none;
                            border-radius: 3px;
                        }
                    }
                }

                
            }
        }
        
        > h2 {
            color: var(--grey-2);
        }
        
        .contacts {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: 900px;
            margin: 0;
            margin-top: 50px;

            > h2 {
                text-align: center;
                color: var(--color-primary);
                margin-bottom: 30px;
            }

            > div {
                height: 40px;
                display: flex;
                gap: 30px;
                justify-content: center;

                > input {
                    height: 40px;
                    width: 300px;
                    padding-left: 10px;
                    font-size: 15px;
                }

                > button {
                    height: 40px;
                    width: 120px;
                    font-size: 18px;
                    font-weight: 600;
                    background-color: var(--color-primary);
                    border: none;
                    border-radius: 3px;
                }
            }

            > ul {
                display: flex;
                overflow: auto;
                margin-top: 30px;
                gap: 50px;
                padding-bottom: 20px;
                
                li {
                    display: flex;
                    height: 385px;
                    min-width: 390px;
                    padding: 20px;
                    flex-direction: column;
                    justify-content: space-between;
                    background-color: var(--color-primary);
                    border-radius: 3px;
                    
                    div {
                        display: flex;
                        align-items: center;
                        height: 60px;
                        
                        > div {

                            h3 {
                                margin-right: 20px;
                            }
                        }
                        
                        > button {
                            width: 80px;
                            height: 40px;
                            font-size: 15px;
                            font-weight: 600;
                            color: var(--color-primary);
                            background-color: var(--grey-1);
                            border: none;
                            border-radius: 3px;
                        }
                    }

                    > .buttons_contacts {
                        display: flex;
                        justify-content: space-between;
                        > button {
                            width: 45%;
                        }
                    }
                }

                
            }
        }
    }
`
export default PageAdmin;