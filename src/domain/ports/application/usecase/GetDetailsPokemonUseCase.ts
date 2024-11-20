import { PokemonDetailsDTO } from "../../../../infrastructure/dtos/DetailsPokemons";
import { PokemonList } from "../../../../infrastructure/dtos/ListPokemons";

export interface GetDetailsPokemonUseCase {
    GetDetailsUseCaseImpl(list: PokemonList[],count:number) : Promise<PokemonDetailsDTO[]>
}