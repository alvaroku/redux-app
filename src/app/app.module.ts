import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { HijoComponent } from './components/contador/hijo/hijo.component';
import { NietoComponent } from './components/contador/nieto/nieto.component';
 
import { contadorReducer } from './components/contador/contador.reducer';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from '../environtments/environment'

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({contador:contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:24,
      logOnly: environment.production
    }),
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
