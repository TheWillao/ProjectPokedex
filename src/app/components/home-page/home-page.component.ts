import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFavoritesComponent } from './modal-favorites/modal-favorites.component';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  filter: string = '';
  pokemons: Pokemon[] = [];
  loadedPokemons: Pokemon[] = [];
  filteredPokemons: any = '';

  constructor(
    private favoritesModal: NgbModal,
    private service: PokedexService
  ) {}

  ngOnInit(): void {
    this.loadPokemons(151, 0);
  }

  loadPokemons(limit: number, offset: number) {
    this.service.getPokemons(limit, offset).subscribe({
      next: (res: any) => {
        res.results.forEach((pokemon: any) => {
          this.service.getPokemonData(pokemon.name).subscribe({
            next: (res: any) => {
              this.pokemons.push(res);
              this.pokemons.map((pokemon: any) => {
                pokemon.favorite = false;
              });
              if (this.pokemons.length === 151) {
                this.loadedPokemons = this.pokemons.slice(0, 15);
              }
            },
            error: (err) => {
              alert(err);
            },
          });
        });
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  loadMorePokemons() {
    this.loadedPokemons = this.pokemons.slice(
      0,
      this.loadedPokemons.length + 15
    );
    console.log(this.loadedPokemons);
  }

  openFavoritesModal() {
    const favoritesModal = this.favoritesModal.open(ModalFavoritesComponent, {
      size: 'lg',
      centered: true,
    });
    favoritesModal.componentInstance.pokemons = this.pokemons;
  }

  filterPokemons() {
    this.filteredPokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.name.includes(this.filter);
    });
    if (this.filteredPokemons.length === 0) {
      alert(
        'O Pokémon não foi encontrado ou não existe. Verifique se o Pokémon desejado é da 1ª Geração, ou se o nome está correto.'
      );
      this.filter = '';
    }
  }
}
