import styled from "styled-components";
import { mixins } from "../../styles";

const StyledMaxWidth = styld.div`
    max-width: ${({maxWidth}) => maxWidth}px;
    margin: 0 auto;
    ${mixins.SIDE_PADDINGS};
`

export default StyledMaxWidth;