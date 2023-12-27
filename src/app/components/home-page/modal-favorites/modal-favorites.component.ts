import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces';
import { Router } from '@angular/router';
import { PokedexService } from '../../pokedex.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-favorites',
  templateUrl: './modal-favorites.component.html',
  styleUrls: ['./modal-favorites.component.scss'],
})
export class ModalFavoritesComponent {
  public pokemons: Pokemon[] = [];
  public favoritePokemons: Pokemon[] = [];

  constructor(
    private router: Router,
    private service: PokedexService,
    private modal: NgbActiveModal
  ) {}

  ngOnInit() {
    this.pokemons.map((pokemon: Pokemon) => {
      if (pokemon.favorite === true) {
        this.favoritePokemons.push(pokemon);
      }
    });
  }
}
