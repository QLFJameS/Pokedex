import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from "../interfaces/Pokemon";
import { ApiService } from '../api.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent{

  pokemon : Pokemon | null = null;

  @Input() set id(pokemonId : number){
    this.api.getPokemon(this.id).then(pokemon=>this.pokemon=pokemon)
    .catch(error=>console.log(error));
  }
  constructor(private api : ApiService){}

}
