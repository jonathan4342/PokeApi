export interface HeaderProps {
    currentPage:number
    resultsPerPage:number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}