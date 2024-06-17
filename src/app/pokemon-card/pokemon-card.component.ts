import { Component,Input } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { RouterLink } from '@angular/router';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
 @Input({required:true}) pokemon !: Pokemon;
}
