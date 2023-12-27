import { HttpClient } from '@angular/common/http'; // Precisa ser importado.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private readonly API = 'https://pokeapi.co/api/v2/pokemon';
  private readonly DB = 'http://localhost:3000/pokemons';

  constructor(private http: HttpClient) {} // http do tipo HttpClient (módulo próprio do Angular): Para capturar APIs.

  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.API}?limit=${limit}&offset=${offset}`);
  }
  // Método para pegar informações extras dos Pokémons
  getPokemonData(pokemon: string) {
    return this.http.get(`${this.API}/${pokemon}`);
  }

  setInStorage(name: string, pokemon: Pokemon) {
    localStorage.setItem('Pokémons', JSON.stringify(pokemon));
  }

  getInStorage(name: string) {
    if (localStorage.getItem('Pokémons')) {
      return JSON.parse(localStorage.getItem('Pokémons')!);
    }
  }
}
