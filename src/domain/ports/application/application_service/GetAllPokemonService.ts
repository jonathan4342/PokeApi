import { PokemonDetailsDTO } from "../../../../infrastructure/dtos/DetailsPokemons";

export interface GetAllPokemonService {
    GetAllPokemon(resultsPerPage: number, currentPage: number):Promise<PokemonDetailsDTO[]>
}