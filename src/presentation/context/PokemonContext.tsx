/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PokemonDetailsDTO } from '../../infrastructure/dtos/DetailsPokemons';

interface PokemonContextType {
    pokemonData: PokemonDetailsDTO[] | undefined;
    setPokemonData: React.Dispatch<React.SetStateAction<PokemonDetailsDTO[] | undefined>>;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface PokemonProviderProps {
    children: ReactNode;
}

export const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
    const [pokemonData, setPokemonData] = useState<PokemonDetailsDTO[]>();
    const [filter, setFilter] = useState('');

    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData, filter, setFilter}}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemonContext must be used within a PokemonProvider");
    }
    return context;
};
