import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { GetDetailsPokemon } from '../../infrastructure/externals/GetDetailsPokemon';
import { DetailsPokemonMapper } from '../../infrastructure/mappers/DetailsPokemonsMapper';
import { PokemonDetailsDTO } from '../../infrastructure/dtos/DetailsPokemons';

vi.mock('axios');

const mockPokemonList = [
    { name: "bulbasaur", url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: "pikachu", url: 'https://pokeapi.co/api/v2/pokemon/2/' },
];

const mockDetailsResponse = {
    name: 'bulbasaur',
    sprites: { front_default: 'bulbasaur-image-url' },
    height: 7,
    weight: 69,
    abilities: [{ ability: { name: 'overgrow' } }],
    types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
};

const mockMappedDetails = new PokemonDetailsDTO();
mockMappedDetails.setCount(2);
mockMappedDetails.setName('bulbasaur');
mockMappedDetails.setImage('bulbasaur-image-url');
mockMappedDetails.setHeight(7);
mockMappedDetails.setWeight(69);
mockMappedDetails.setAbilities(['overgrow']);
mockMappedDetails.setTypes(['grass', 'poison']);

describe('GetDetailsPokemon', () => {
    it('should fetch and map pokemon details correctly', async () => {
        const axiosGetMock = vi.fn().mockResolvedValue({ data: mockDetailsResponse });
        axios.get = axiosGetMock;

        const getDetailsPokemon = new GetDetailsPokemon();

        const detailsMapperMock = vi.fn(() => mockMappedDetails);
        vi.spyOn(DetailsPokemonMapper.prototype, 'mapTo').mockImplementation(detailsMapperMock);

        const result = await getDetailsPokemon.PokemonsDetails(mockPokemonList, 2);

        expect(result).toEqual([mockMappedDetails, mockMappedDetails]); 

        expect(axiosGetMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1/');
        expect(axiosGetMock).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/2/');

        expect(detailsMapperMock).toHaveBeenCalledWith({
            count: 2,
            name: 'bulbasaur',
            image: 'bulbasaur-image-url',
            height: 7,
            weight: 69,
            abilities: ['overgrow'],
            types: ['grass', 'poison'],
        });
    });
});
