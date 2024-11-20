import { GetAllPokemonService } from "../../domain/ports/application/application_service/GetAllPokemonService";
import { PokemonDetailsDTO } from "../../infrastructure/dtos/DetailsPokemons";
import { GetDetailsUseCaseImpl } from "../usecase/GetDetailsUseCaseImpl";
import { GetPokemonUseCaseImpl } from "../usecase/GetPokemonUseCaseImpl";

export class GetAllPokemonServiceImpl implements GetAllPokemonService{
    async GetAllPokemon(resultsPerPage: number, currentPage: number): Promise<PokemonDetailsDTO[]> {
        const getPokemonUseCase = new GetPokemonUseCaseImpl()
        const getAllPokemonUseCase = new GetDetailsUseCaseImpl()

        const listPokemon = await getPokemonUseCase.GetPokemonImpl(resultsPerPage, currentPage);
        const details=getAllPokemonUseCase.GetDetailsUseCaseImpl(listPokemon.getResults(),listPokemon.getCount())
        return details
    }
}