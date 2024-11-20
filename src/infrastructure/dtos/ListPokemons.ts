export class PokemonListDTO {
    private count!: number;
    private next!: string | null;
    private previous!: string | null;
    private results: PokemonList[] = [];

    public getCount():number{
        return this.count
    }
    public setCount(count:number):void{
        this.count=count;
    }
    public getNext():string | null{
        return this.next
    }
    public setNext(next: string | null):void{
        this.next=next;
    }
    public getPrevious():string | null{
        return this.previous
    }
    public setPrevious(previous: string | null):void{
        this.previous=previous;
    }
    public getResults():PokemonList[]{
        return this.results
    }
    public setResults(results:PokemonList[]):void{
        this.results=results;
    }
}

export class PokemonList {
    name: string;
    url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}
