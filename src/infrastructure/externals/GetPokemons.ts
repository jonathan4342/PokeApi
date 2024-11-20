import axios from "axios";
import { PokemonListDTO } from "../dtos/ListPokemons";
import { PokemonListRepository } from "../../domain/ports/infrastructure/PokemonRepository";
import { PokemonMapper } from "../mappers/PokemonsMapper";


export class GetPokemons implements PokemonListRepository{
    async fetchPokemon(resultsPerPage:number,currentPage:number): Promise<PokemonListDTO> {
        const iMapper = new PokemonMapper()
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${resultsPerPage}&offset=${(currentPage - 1) * resultsPerPage}`);
        const pokemonList = response.data;
        const pokemonsListDto = iMapper.mapTo(pokemonList)
        return pokemonsListDto
    }
}