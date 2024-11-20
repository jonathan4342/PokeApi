import { PokemonListDTO } from "../../../infrastructure/dtos/ListPokemons";

export interface PokemonListRepository {
    fetchPokemon(resultsPerPage: number, currentPage: number): Promise<PokemonListDTO>;
}
