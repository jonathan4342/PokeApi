import { IMapper } from "../../domain/value_objects/IMapper"
import { PokemonDetails } from "../../domain/value_objects/PokemonDetails.interface"
import {  PokemonDetailsDTO } from "../dtos/DetailsPokemons"

export class DetailsPokemonMapper implements IMapper<PokemonDetails,PokemonDetailsDTO>{
    mapTo(params: PokemonDetails): PokemonDetailsDTO {
        const details = new PokemonDetailsDTO()
        details.setAbilities(params.abilities)
        details.setHeight(params.height)
        details.setImage(params.image)
        details.setName(params.name)
        details.setWeight(params.weight)
        details.setTypes(params.types)
        details.setCount(params.count)
        return details
    }
}