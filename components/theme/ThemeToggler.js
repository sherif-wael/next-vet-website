import styled from 'styled-components';
import { ThemeContext } from "./ThemeProvider";

const StyledButton = styled.button`
    background-color: transparent;
    padding: 5px 5px 5px 0;
    cursor: pointer;
    
    img{
        width: 20px;
        height: 20px;
    }
`


export default function Toggler(){
    let { colorMode, setColorMode } = React.useContext(ThemeContext);

    if(!colorMode){
        return null
    }

    return (
        <StyledButton onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}>
            {
                colorMode === "dark" ? 
                <img src="/icons/sun.svg" alt="set light mode" />
                :
                <img src="/icons/moon.svg" alt="set dark mode" />
            }
        </StyledButton>
    )
}