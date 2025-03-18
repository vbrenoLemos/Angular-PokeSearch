import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './../../services/pokemon.service';
import { PokemonData, PokemonSprites } from '../../models/pokemonData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() nomePokemon: string = '';
  pokeSprite: keyof PokemonSprites ='front_default'

  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: '',
      front_shiny: ''
    },
    types: []
  };

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    if (this.nomePokemon) {
      this.fetchPokemon(this.nomePokemon);
    }
  }

  tradeSprite(){
    if (this.pokeSprite === 'front_default') {
      this.pokeSprite = 'front_shiny';
    } else {
      this.pokeSprite = 'front_default';
    }

  }

  fetchPokemon(nome: string): void {
    this.service.getPokemon(nome.toLowerCase()).subscribe(
      (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        };
      },
      (err) => {
        console.log('Erro ao buscar Pokémon:', err);

      }
    );
  }
}
