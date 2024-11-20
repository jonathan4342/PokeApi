export interface PokemonListInterface {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonList[];
}

interface PokemonList {
    name: string;
    url: string;
}
