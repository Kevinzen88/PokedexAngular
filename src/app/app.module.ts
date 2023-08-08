import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ImgPokemonComponent } from './components/img-pokemon/img-pokemon.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { ModalDetalleComponent } from './components/modal-detalle/modal-detalle.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalTableComponent } from './components/modal-table/modal-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImgPokemonComponent,
    CardPokemonComponent,
    ModalDetalleComponent,
    FilterPipe,
    ModalTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
