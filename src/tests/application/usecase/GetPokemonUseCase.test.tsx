import { describe, it, expect, vi } from 'vitest';
import { GetPokemons } from '../../../infrastructure/externals/GetPokemons';
import { GetPokemonUseCaseImpl } from '../../../application/usecase/GetPokemonUseCaseImpl';
import { PokemonListDTO } from '../../../infrastructure/dtos/ListPokemons';

vi.mock('../../infrastructure/externals/GetPokemons');

const mockPokemonListDto = new PokemonListDTO();
mockPokemonListDto.setCount(2);
mockPokemonListDto.setNext(null);
mockPokemonListDto.setPrevious(null);
mockPokemonListDto.setResults([
  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
]);

describe('GetPokemonUseCaseImpl', () => {
  it('should fetch and return the list of pokemons', async () => {
    const getPokemonsMock = vi.fn().mockResolvedValue(mockPokemonListDto);
    GetPokemons.prototype.fetchPokemon = getPokemonsMock;

    const getPokemonUseCase = new GetPokemonUseCaseImpl();

    const result = await getPokemonUseCase.GetPokemonImpl(2, 1);

    expect(result).toEqual(mockPokemonListDto);

    expect(getPokemonsMock).toHaveBeenCalledWith(2, 1);
  });
});
