export class PokemonDetailsDTO {
    private name!: string;
    private image!: string;
    private height!: number;
    private weight!: number;
    private abilities!: string[];
    private types!: string[]; 
    private count!:number;
    // Getters y setters para name
    public getCount():number{
        return this.count
    }
    public setCount(count:number):void{
        this.count=count;
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    // Getters y setters para image
    public getImage(): string {
        return this.image;
    }
    public setImage(image: string): void {
        this.image = image;
    }

    // Getters y setters para height
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number): void {
        this.height = height;
    }

    // Getters y setters para weight
    public getWeight(): number {
        return this.weight;
    }
    public setWeight(weight: number): void {
        this.weight = weight;
    }

    // Getters y setters para abilities
    public getAbilities(): string[] {
        return this.abilities;
    }
    public setAbilities(abilities: string[]): void {
        this.abilities = abilities;
    }
    public getTypes(): string[] {
        return this.types;
      }
    
      public setTypes(types: string[]): void {
        this.types = types;
      }

    // Método adicional para obtener una descripción del Pokémon
    public getDescription(): string {
        return `${this.getName()} is ${this.getHeight()} dm tall and weighs ${this.getWeight()} hg.`;
    }
}
