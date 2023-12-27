import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Precisa ser importado.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardsComponent } from './components/home-page/cards/cards.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonCardComponent } from './components/home-page/pokemon-card/pokemon-card.component';
import { ModalFavoritesComponent } from './components/home-page/modal-favorites/modal-favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardsComponent,
    PokemonCardComponent,
    ModalFavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HomePageComponent],
})
export class AppModule {}
