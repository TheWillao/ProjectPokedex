import { Component, Input } from '@angular/core';
import { PokedexService } from '../../pokedex.service';
import { Pokemon } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  public pokemon: any;

  constructor(private service: PokedexService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemon = this.service.getInStorage();
  }
}
