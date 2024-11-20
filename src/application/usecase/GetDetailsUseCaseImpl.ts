import { GetDetailsPokemonUseCase } from "../../domain/ports/application/usecase/GetDetailsPokemonUseCase";
import { PokemonDetailsDTO } from "../../infrastructure/dtos/DetailsPokemons";
import { PokemonList } from "../../infrastructure/dtos/ListPokemons";
import { GetDetailsPokemon } from "../../infrastructure/externals/GetDetailsPokemon";

export class GetDetailsUseCaseImpl implements GetDetailsPokemonUseCase{
    async GetDetailsUseCaseImpl(list: PokemonList[],count:number): Promise<PokemonDetailsDTO[]> {
        const getDetailsRepository = new GetDetailsPokemon()

        const details = await getDetailsRepository.PokemonsDetails(list,count)
        return details
    }
}