import { IMapper } from "../../domain/value_objects/IMapper";
import { PokemonListInterface } from "../../domain/value_objects/PokemonList.interface";
import { PokemonListDTO } from "../dtos/ListPokemons";

export class PokemonMapper implements IMapper<PokemonListInterface,PokemonListDTO>{
    mapTo(params: PokemonListInterface): PokemonListDTO {
        const pokemonsList:PokemonListDTO = new PokemonListDTO()

        pokemonsList.setCount(params.count)
        pokemonsList.setNext(params.next)
        pokemonsList.setPrevious(params.previous)
        pokemonsList.setResults(params.results)
        return pokemonsList
    }
}