import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  pokemon:any
  constructor(private pokemonService:PokemonService){
    
  }
  ngOnInit(): void {
    this.pokemon = this.pokemonService.getPokemon(1).subscribe(result=> this.pokemon = result);
  }
}
