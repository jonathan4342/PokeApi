import styled from "styled-components";
import { PropsStyleImg } from "./Img.interface";

export const StyledImg = styled.img<PropsStyleImg>`
    width: ${(props) => (props.width ? props.width : '3rem')};;
    height: ${(props) => (props.height ? props.height : '#3rem')};;
`