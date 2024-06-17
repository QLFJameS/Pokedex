import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { ApiService } from '../api.service';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent,RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  constructor(private api: ApiService) { }

  pokemons: Pokemon[] = [];

  // ngOnInit est appelée par Angular une fois à l'initialisation du composant
  ngOnInit(): void {
    this.api.getPokemons().then(pokemons => {
      // Je fetch tout mes pokemons et les places dans l'état pokemons.
      this.pokemons = pokemons
    });
  }
}
