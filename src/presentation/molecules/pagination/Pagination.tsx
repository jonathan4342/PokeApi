import { Button } from '../../atoms/button/button';
import { Input } from '../../atoms/inputs/Input';
import { usePokemonContext } from '../../context/PokemonContext';
import { HeaderProps } from '../../organisms/header/Header.interface';
import { ContainerInput, ContainerPagination } from './Pagination.style';

export const Pagination = ({ setCurrentPage, currentPage }: HeaderProps) => {
    const { filter, setFilter, pokemonData = [] } = usePokemonContext();

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };
    const totalPages = Math.ceil((pokemonData[0]?.getCount?.() || 10) / 20);


    const handlePageClick = (page: number) => {
        setCurrentPage(page);

    };
    const maxPageRange = 5;
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
        <ContainerInput>
            <Input placeholder="Search for  a pokemon" value={filter} onChange={handleFilterChange} />
            <ContainerPagination>
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((pageNumber) => (
                    <Button bgColor='white'
                        key={pageNumber}
                        onClick={() => handlePageClick(pageNumber)}
                        disabled={pageNumber === currentPage}
                    >
                        {pageNumber}
                    </Button>
                ))}
            </ContainerPagination>
        </ContainerInput>
    )
}