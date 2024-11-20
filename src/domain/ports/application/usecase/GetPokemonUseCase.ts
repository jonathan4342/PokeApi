import { PokemonListDTO } from "../../../../infrastructure/dtos/ListPokemons";

export interface GetPokemonUseCase {
    GetPokemonImpl(resultsPerPage: number, currentPage: number): Promise<PokemonListDTO>
}