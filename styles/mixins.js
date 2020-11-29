import { css } from "styled-components";

const mixins = {};

mixins.FLEX_CENTER = css`
    display: flex;
    align-items: center;
    jusityf-content: center;
`

mixins.FLEX_SPACE_BETWEEN = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

mixins.FLEX_COLUMNN_CENTER = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

mixins.FULL_WIDTH_AFTER = css`
    content: "";
    poistion: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

mixins.SIDE_PADDINGS = css`
    padding-left: 32px;
    padding-right: 32px;

    @media (max-width: 536px){
        padding-left: 16px;
        padding-right: 16px;
    }
`


mixins.CUSTOM_SCROLL_BAR = css`
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {

    }
    
    &::-webkit-scrollbar-thumb {
        background-color: hsl(0deg, 0%, 80%);
    }

`


mixins.NAV_FONT_SIZE = fz => (
    css`
        @media (max-width: 563px){
            font-size: ${fz}px;
        }
    `
)

export default mixins