import { useEffect, useRef, useState } from "react"; 
import styled from "styled-components";
import { animated, useSpring } from "react-spring";


const StyledWrapper = styled(animated.div)`
    overflow-y: hidden;
    will-change: height;
`


function Collapse({extend = false, children}){
    let [height, setHeight] = useState("auto");
    let collapsible = useRef(null);

    let style = useSpring({
        height: extend ? height : 0,
        duration: 300
    })

    useEffect(() => {
        let actualHeight = collapsible.current.scrollHeight;
        setHeight(actualHeight);
    }, [children, extend])

    return (
        <StyledWrapper style={style} ref={collapsible}>
            {children}
        </StyledWrapper>
    )
}

export default Collapse