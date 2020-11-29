import Head from "next/head";
import styled from "styled-components";
import VerticalNav from "./navbar/VerticalNav";
import { mixins } from "../styles";

const StyledWrapper = styled.div`
    display: flex;
`

const StyledMain = styled.main`
    flex-grow: 1;
    background-color: #f5f6f8;
    // ${mixins.SIDE_PADDINGS};
`

export default function Layout({children}){
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Varela+Round&display=swap" rel="stylesheet" />
            </Head>
            <StyledWrapper>
                <VerticalNav />
                <StyledMain>
                    {children}
                </StyledMain>
            </StyledWrapper>
        </div>
    )
}