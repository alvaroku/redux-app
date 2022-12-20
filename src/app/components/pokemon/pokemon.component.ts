import { Component, OnInit, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemon:Pokemon = {id:0,height:0,weight:0,base_experience:0,name:"",sprites:{front_default:"",back_default:"",back_shiny:"",front_shiny:""}}

  sprites:string[] = []
  constructor(private store: Store<AppState>,private pokemonService:PokemonService){
    
  }
  ngOnInit(): void {
    this.store.select('contador').subscribe(state=>{
      this.getPokemon(state)
    })
  }
  getPokemon(id:number){
    this.pokemonService.getPokemon(id).subscribe(result=>{
      this.pokemon = result
      this.sprites = [this.pokemon.sprites.front_default,this.pokemon.sprites.back_default,this.pokemon.sprites.front_shiny,this.pokemon.sprites.back_shiny]
      console.log(this.sprites)
    });
  }
}
