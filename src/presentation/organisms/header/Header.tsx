import { Img } from "../../atoms/img/Img"
import { ContainerHeader, ContainerImgHeader } from "./Header.style"
import pokemonImage from '../../../assets/pokemon.png';
import { Pagination } from "../../molecules/pagination/Pagination";
import { HeaderProps } from "./Header.interface";

export const Header = ({ setCurrentPage, currentPage }: HeaderProps)=>{
    return (
        <ContainerHeader>
            <ContainerImgHeader>
                <Img src={pokemonImage} height='6rem' width='15rem' />
            </ContainerImgHeader>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </ContainerHeader>
    )
}