import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { navLinks, navSubjects } from "../../constants";
import { Collapse, EmptyBox } from "../common/";
import { mixins } from "../../styles";
import ThemeToggler from "../theme/ThemeToggler";
import { useClickAwayListener } from "../../hooks";

const StyledWrapper = styled.nav`
    padding: 0 32px 20px;
    ${mixins.CUSTOM_SCROLL_BAR};
    height: 100vh;
    position: sticky;
    top: 0;
    overflow-y: auto;
    width: 300px;
    max-width: 100%;
    border-right: 1px solid hsl(0deg, 0%, 80%);
    background-color: white;
    z-index: 5;

    @media (max-width: 940px){
        position: fixed;
        top: 0;
        left: 0;
        transition: transform 300ms ease;
        width: min(300px, 100%);
        transform: ${({expanded}) => expanded ? "translateX(0)" : "translateX(-110%)"};
    }

    @media (max-width: 563px){
        padding: 0 10px 20px 20px;
    }
`


const StyledToggler = styled.button`
    display: none;

    @media(max-width: 940px){
        position: fixed;
        cursor: pointer;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: 0 2px 12px hsl(0deg, 0%, 70%);
        z-index: 6;
        bottom: 30px;
        right: 30px;
        display: block;
        background-color: #fff;
        ${mixins.FLEX_COLUMNN_CENTER};
    }

    span{
        display: block;
        width: 30px;
        height: 4px;
        margin: 0 0 5px 0;
        background-color: hsl(0deg, 0%, 20%);
        border-radius: 2px;
        transition: transform 300ms linear,
                    opacity 300ms linear;
        &:nth-child(3){
            margin: 0;
        }
    }

    &.close{
        span:nth-of-type(1){
            transform: translateY(9px) rotate(45deg);
        }
        span:nth-of-type(2){
            opacity: 0;
        }
        span:nth-of-type(3){
            transform: translateY(-9px) rotate(-45deg);
        }
    }
`


const StyledLinksWrapper = styled.div`
    ul{
        padding: 0;
        list-style: none;

        li{
            margin-bottom: 25px;
        }

        a{
            font-size: 24px;
            color: var(--color-text);
            ${mixins.NAV_FONT_SIZE(22)}
        }
    }
`


const StyledSubjectsWrapper = styled.div`
    .header{
        font-size: 24px;
        ${mixins.NAV_FONT_SIZE(22)}
    }

    .subjects-list{
        list-style: none;
        padding: 0 0 0 13px;
        margin: 10px 0;
        li{
            padding: 10px 0;
            cursor: pointer;
        }
        span{
            display: block;
        }
    }

    .link-list{
        list-style: none;
        padding: 4px 0 0 16px;
        li{
            padding: 6px 0;
        }
        a{
            color: var(--color-text);
            text-decoration: underline;
        }
    }
`

const StyledControllers = styled.div`
    
`


function VerticalNav(){
    let [state, setState] = useState({});
    let [expanded, setNavExpanded] = useState(false);
    let nav = useRef(null);

    useClickAwayListener(nav, expanded, () => setNavExpanded(false))

    useEffect(() => {
        if(expanded){
            document.body.classList.add("hidden");
        }else{
            document.body.classList.remove("hidden");
        }
    }, [expanded])

    useEffect(() => {
        const handler = () => {
            if(window.innerWidth > 940 && expanded){
                setNavExpanded(false)
            }
        }
        window.addEventListener("resize",handler)

        return () => {
            window.removeEventListener("resize", handler)
        }
    }, [expanded])

    const handleClick = index => {
        if(state[index]){
            let {[index]: value, ...newState} = state;
            setState(newState)
        }else{
            setState({...state, [index]: true})
        }
    }

    return (
        <div ref={nav}>
            <StyledToggler className={expanded ? "close" : ""} onClick={() => setNavExpanded(!expanded)}>
                <span></span>
                <span></span>
                <span></span>
            </StyledToggler>
            <StyledWrapper expanded={expanded}>
                <EmptyBox height={90} />
                <StyledLinksWrapper>
                    <ul>
                        {
                            navLinks.map(({name, href}, i) => (
                                <li key={i}>
                                    <Link href={href}><a className="font-round">{name}</a></Link>
                                </li>
                            )) 
                        }
                    </ul>
                </StyledLinksWrapper>
                <StyledSubjectsWrapper>
                    <div className="font-round header">
                        Subjects
                    </div>
                    <ul className="subjects-list">
                        {
                            navSubjects.map((subject, i) => {
                                let subjectLink = subject.toLowerCase().replace(/\s/g, "-");
                                return (
                                    <li key={i}>
                                        <span onClick={() => handleClick(i)} className="noselect">{subject}</span>
                                        <Collapse extend={state[i] || false}>  
                                            <ul className="link-list">
                                                <li>
                                                    <Link href={`/lectures/${subjectLink}`}><a>lectures</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`/sections/${subjectLink}`}><a>sections</a></Link>
                                                </li>
                                            </ul>
                                        </Collapse>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </StyledSubjectsWrapper>
                {/* <StyledControllers>
                    <ThemeToggler />
                </StyledControllers> */}
            </StyledWrapper>
        </div>
    )
}


export default VerticalNav