import { describe, it, expect, vi } from 'vitest';
import { GetDetailsPokemon } from '../../../infrastructure/externals/GetDetailsPokemon';
import { GetDetailsUseCaseImpl } from '../../../application/usecase/GetDetailsUseCaseImpl';
import { PokemonList } from '../../../infrastructure/dtos/ListPokemons';
import { PokemonDetailsDTO } from '../../../infrastructure/dtos/DetailsPokemons';

vi.mock('../../infrastructure/externals/GetDetailsPokemon');

const mockPokemonList: PokemonList[] = [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
];

const mockPokemonDetailsDto = new PokemonDetailsDTO();
mockPokemonDetailsDto.setCount(2);
mockPokemonDetailsDto.setName('bulbasaur');
mockPokemonDetailsDto.setImage('bulbasaur-image-url');
mockPokemonDetailsDto.setHeight(7);
mockPokemonDetailsDto.setWeight(69);
mockPokemonDetailsDto.setAbilities(['overgrow']);
mockPokemonDetailsDto.setTypes(['grass', 'poison']);

describe('GetDetailsUseCaseImpl', () => {
    it('should fetch pokemon details correctly', async () => {
        const getDetailsPokemonMock = vi.fn().mockResolvedValue([mockPokemonDetailsDto, mockPokemonDetailsDto]);
        GetDetailsPokemon.prototype.PokemonsDetails = getDetailsPokemonMock;

        const getDetailsUseCase = new GetDetailsUseCaseImpl();

        const result = await getDetailsUseCase.GetDetailsUseCaseImpl(mockPokemonList, 2);

        expect(result).toEqual([mockPokemonDetailsDto, mockPokemonDetailsDto]);

        expect(getDetailsPokemonMock).toHaveBeenCalledWith(mockPokemonList, 2);
    });
});
