/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { PokemonDetailsRepository } from "../../domain/ports/infrastructure/PokemonDetailsRepository";
import { PokemonList } from "../dtos/ListPokemons";
import { DetailsPokemonMapper } from "../mappers/DetailsPokemonsMapper";
import { PokemonDetailsDTO } from "../dtos/DetailsPokemons";

export class GetDetailsPokemon implements PokemonDetailsRepository {
    async PokemonsDetails(list: PokemonList[],count:number): Promise<PokemonDetailsDTO[]> {
        const mapper = new DetailsPokemonMapper()

        const detailedPokemonData = await Promise.all(
            list.map(async (pokemon) => {
                const { data: details } = await axios.get(pokemon.url);
                const JsonFormat = {
                    count:count,
                    name: details.name,
                    image: details.sprites.front_default, 
                    height: details.height,
                    weight: details.weight, 
                    abilities: details.abilities.map(
                        (a: { ability: { name: string } }) => a.ability.name
                    ),
                    types: details.types.map((type: any) => type.type.name)
                }
                
                const detailsDto= mapper.mapTo(JsonFormat)
                return detailsDto
            })
        );
        return detailedPokemonData
    }
}