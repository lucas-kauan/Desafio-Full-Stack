import styled from "styled-components";

const HeaderNavigation = styled.header`

    height: 70px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    > div {
        height: 100%;
        display: flex;
        align-items: center;
        width: 900px;
        margin: auto;
            
        > p {
            width: 100%;
            font-size: 30px;
            color: var(--grey-2);
                
            > strong {
                color: var(--color-primary);
    
            }
        }

        > button {
            height: 30px;
            width: 60px;
            color: var(--grey-1);
            font-weight: 600;
            font-size: 13px;
            background-color: var(--color-primary);
            border: none;
            border-radius: 3px;
        }
    }
`
export default HeaderNavigation;