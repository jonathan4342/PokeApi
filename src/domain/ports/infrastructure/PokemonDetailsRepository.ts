import { PokemonDetailsDTO } from "../../../infrastructure/dtos/DetailsPokemons";
import { PokemonList } from "../../../infrastructure/dtos/ListPokemons";

export interface PokemonDetailsRepository {
    PokemonsDetails(list: PokemonList[],count:number) : Promise<PokemonDetailsDTO[]>
}