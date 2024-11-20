import { describe, it, expect, vi } from 'vitest';
import { PokemonDetailsDTO } from '../../../infrastructure/dtos/DetailsPokemons';
import { PokemonListDTO } from '../../../infrastructure/dtos/ListPokemons';
import { GetPokemonUseCaseImpl } from '../../../application/usecase/GetPokemonUseCaseImpl';
import { GetAllPokemonServiceImpl } from '../../../application/application_services/GetAllPokemonServiceImpl';
import { GetDetailsUseCaseImpl } from '../../../application/usecase/GetDetailsUseCaseImpl';

vi.mock('../../infrastructure/usecase/GetPokemonUseCaseImpl');
vi.mock('../../infrastructure/usecase/GetDetailsUseCaseImpl');

const mockPokemonListDto = new PokemonListDTO();
mockPokemonListDto.setCount(2);
mockPokemonListDto.setResults([
  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
]);

const mockPokemonDetailsDto = new PokemonDetailsDTO();
mockPokemonDetailsDto.setCount(2);
mockPokemonDetailsDto.setName('bulbasaur');
mockPokemonDetailsDto.setImage('bulbasaur-image-url');
mockPokemonDetailsDto.setHeight(7);
mockPokemonDetailsDto.setWeight(69);
mockPokemonDetailsDto.setAbilities(['overgrow']);
mockPokemonDetailsDto.setTypes(['grass', 'poison']);

describe('GetAllPokemonServiceImpl', () => {
  it('should fetch all pokemon and their details correctly', async () => {
    const getPokemonUseCaseMock = vi.fn().mockResolvedValue(mockPokemonListDto);
    GetPokemonUseCaseImpl.prototype.GetPokemonImpl = getPokemonUseCaseMock;

    const getDetailsUseCaseMock = vi.fn().mockResolvedValue([mockPokemonDetailsDto, mockPokemonDetailsDto]);
    GetDetailsUseCaseImpl.prototype.GetDetailsUseCaseImpl = getDetailsUseCaseMock;

    const getAllPokemonService = new GetAllPokemonServiceImpl();

    const result = await getAllPokemonService.GetAllPokemon(2, 1);

    expect(result).toEqual([mockPokemonDetailsDto, mockPokemonDetailsDto]);

    expect(getPokemonUseCaseMock).toHaveBeenCalledWith(2, 1);

    expect(getDetailsUseCaseMock).toHaveBeenCalledWith(
      mockPokemonListDto.getResults(),
      mockPokemonListDto.getCount()
    );
  });
});
