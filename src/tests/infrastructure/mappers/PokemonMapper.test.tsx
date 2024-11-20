import { describe, it, expect } from 'vitest';
import { PokemonListInterface } from '../../../domain/value_objects/PokemonList.interface';
import { PokemonMapper } from '../../../infrastructure/mappers/PokemonsMapper';
import { PokemonListDTO } from '../../../infrastructure/dtos/ListPokemons';

describe('PokemonMapper', () => {
  it('should map PokemonListInterface to PokemonListDTO correctly', () => {
    const mockPokemonList: PokemonListInterface = {
      count: 2,
      next: null,
      previous: null,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    const mapper = new PokemonMapper();

    const result: PokemonListDTO = mapper.mapTo(mockPokemonList);

    const expectedPokemonListDto = new PokemonListDTO();
    expectedPokemonListDto.setCount(2);
    expectedPokemonListDto.setNext(null);
    expectedPokemonListDto.setPrevious(null);
    expectedPokemonListDto.setResults([
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    ]);

    expect(result).toEqual(expectedPokemonListDto);
  });
});
