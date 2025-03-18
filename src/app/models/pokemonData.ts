export type PokemonSprites = {
  front_default: string;
  front_shiny: string;
}

export type PokemonData = {
  name:string
  id:number
  sprites: PokemonSprites
  types:{
    slot: number
    type: {
      name:string
      url:string
    }
  }[]
}


