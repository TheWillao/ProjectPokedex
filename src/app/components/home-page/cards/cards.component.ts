import { Pokemon } from './../../interfaces';
import { Component, Input } from '@angular/core';
import { PokedexService } from '../../pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() pokemons: Pokemon[] = [];

  constructor(private service: PokedexService, private router: Router) {}

  ngOnInit(): void {}

  favoritePokemon(index: any) {
    if (this.pokemons[index].favorite) {
      this.pokemons[index].favorite = false;
    } else this.pokemons[index].favorite = true;
  }

  showDetails(i: number) {
    this.service.setInStorage('Pokemón', this.pokemons[i]);
    this.router.navigate(['/pokemon', i]);
  }
}
