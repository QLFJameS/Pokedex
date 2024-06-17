import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
{path : "", component: HomeComponent},
{path : "pokedex", component: PokemonListComponent},
{path : "pokemon-details/:id", component: PokemonDetailsComponent},
{path : "**", component: NotFoundComponent}
];
