import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { PokemonListDTO } from '../../infrastructure/dtos/ListPokemons';
import { GetPokemons } from '../../infrastructure/externals/GetPokemons';
import { PokemonMapper } from '../../infrastructure/mappers/PokemonsMapper';

// Mockear axios
vi.mock('axios');

const mockPokemonList = {
    results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    ],
    count: 2,
    next: null,
    previous: null,
};

const mockMappedPokemonList = new PokemonListDTO();
mockMappedPokemonList.setCount(2);
mockMappedPokemonList.setNext(null);
mockMappedPokemonList.setPrevious(null);
mockMappedPokemonList.setResults([
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
]);

describe('GetPokemons', () => {
    it('should fetch and map the list of pokemons', async () => {
        const axiosGetMock = vi.fn().mockResolvedValue({ data: mockPokemonList });
        axios.get = axiosGetMock;

        const getPokemons = new GetPokemons();

        const pokemonMapperMock = vi.fn(() => mockMappedPokemonList);
        vi.spyOn(PokemonMapper.prototype, 'mapTo').mockImplementation(pokemonMapperMock);

        const result = await getPokemons.fetchPokemon(2, 1);

        expect(result).toEqual(mockMappedPokemonList);

        expect(axiosGetMock).toHaveBeenCalledWith(
            'https://pokeapi.co/api/v2/pokemon?limit=2&offset=0'
        );

        
        expect(pokemonMapperMock).toHaveBeenCalledWith(mockPokemonList);
    });
});
