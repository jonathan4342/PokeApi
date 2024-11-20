import { describe, it, expect } from 'vitest';
import { PokemonDetails } from '../../../domain/value_objects/PokemonDetails.interface';
import { DetailsPokemonMapper } from '../../../infrastructure/mappers/DetailsPokemonsMapper';
import { PokemonDetailsDTO } from '../../../infrastructure/dtos/DetailsPokemons';

describe('DetailsPokemonMapper', () => {
  it('should map PokemonDetails to PokemonDetailsDTO correctly', () => {
    const mockPokemonDetails: PokemonDetails = {
      abilities: ['chlorophyll', 'overgrow'],
      height: 7,
      image: 'https://pokeapi.co/media/sprites/pokemon/1.png',
      name: 'bulbasaur',
      weight: 69,
      types: ['grass', 'poison'],
      count: 1,
    };

    const mapper = new DetailsPokemonMapper();

    const result: PokemonDetailsDTO = mapper.mapTo(mockPokemonDetails);

    const expectedPokemonDetailsDto = new PokemonDetailsDTO();
    expectedPokemonDetailsDto.setAbilities(['chlorophyll', 'overgrow']);
    expectedPokemonDetailsDto.setHeight(7);
    expectedPokemonDetailsDto.setImage('https://pokeapi.co/media/sprites/pokemon/1.png');
    expectedPokemonDetailsDto.setName('bulbasaur');
    expectedPokemonDetailsDto.setWeight(69);
    expectedPokemonDetailsDto.setTypes(['grass', 'poison']);
    expectedPokemonDetailsDto.setCount(1);

    expect(result).toEqual(expectedPokemonDetailsDto);
  });
});
