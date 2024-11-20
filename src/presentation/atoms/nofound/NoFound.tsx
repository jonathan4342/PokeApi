import { Img } from "../img/Img"
import { ContainerNoFound } from "./NoFound.style"
import pokemonImage from '../../../assets/nofound.png';
export const NotFound =()=>{
    return(
        <ContainerNoFound>
            <Img src={pokemonImage} height="20rem" width="20rem"/>
            <h1>No hay más pokemones</h1>
        </ContainerNoFound>
    )
}