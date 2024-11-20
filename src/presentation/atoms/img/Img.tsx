import { ImgProps } from "./Img.interface";
import { StyledImg } from "./Img.style";

export const Img = ({src,height,width}:ImgProps)=>{
    return (
        <StyledImg height={height} width={width} src={src} alt="poke img"/>
    )
} 