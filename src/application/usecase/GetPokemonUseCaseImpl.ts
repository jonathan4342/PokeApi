import { GetPokemonUseCase } from "../../domain/ports/application/usecase/GetPokemonUseCase";
import { PokemonListDTO } from "../../infrastructure/dtos/ListPokemons";
import { GetPokemons } from "../../infrastructure/externals/GetPokemons";

export class GetPokemonUseCaseImpl implements GetPokemonUseCase{
    async GetPokemonImpl(resultsPerPage: number, currentPage: number): Promise<PokemonListDTO> {
        const repository = new GetPokemons()

        const listPokemons= await repository.fetchPokemon(resultsPerPage,currentPage)

        return listPokemons
    }
}