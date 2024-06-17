import { Injectable } from '@angular/core';
import { Pokemon } from './interfaces/Pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  public async getPokemons(limit : number = 100) : Promise<Pokemon[]>{
    return fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/"+limit)
    .then(res=>res.json());
  }
  public async getPokemon(id : number) : Promise<Pokemon>{
    return fetch("https://pokebuildapi.fr/api/v1/pokemon/:id"+id)
    .then(res=>res.json());
  }
}
