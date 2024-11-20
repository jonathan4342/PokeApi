import pokemonImage from '../../../assets/pokemon.png';
import { Button } from '../../atoms/button/button';
import { Img } from '../../atoms/img/Img';
import { Input } from '../../atoms/inputs/Input';
import { usePokemonContext } from '../../context/PokemonContext';
import { Pagination } from '../../pages/Home/Home.style';
import { HeaderProps } from './Header.interface';
import { ContainerHeader, ContainerImgHeader, ContainerInput } from './Header.style';

export const Header = ({ setCurrentPage, currentPage }: HeaderProps) => {
    const { filter, setFilter, pokemonData = [] } = usePokemonContext();

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };
    const totalPages = Math.ceil((pokemonData[0]?.getCount?.() || 10) / 20);


    const handlePageClick = (page: number) => {
        setCurrentPage(page);

    };
    const maxPageRange = 5; // Cuántas páginas mostrar como máximo
    const halfRange = Math.floor(maxPageRange / 2);
    let startPage = currentPage - halfRange;
    let endPage = currentPage + halfRange;
    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(maxPageRange, totalPages);
    }
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, totalPages - maxPageRange + 1);
    }

    return (
        <ContainerHeader>
            <ContainerImgHeader>
                <Img src={pokemonImage} height='6rem' width='15rem' />
            </ContainerImgHeader>
            <ContainerInput>
                <Input placeholder="Buscar pokemon" value={filter} onChange={handleFilterChange} />
                <Pagination>
                        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((pageNumber) => (
                            <Button bgColor='white'
                                key={pageNumber}
                                onClick={() => handlePageClick(pageNumber)}
                                disabled={pageNumber === currentPage}
                            >
                                {pageNumber}
                            </Button>
                        ))}
                </Pagination>
            </ContainerInput>
        </ContainerHeader>
    )
}