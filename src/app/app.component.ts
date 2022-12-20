import { Component,Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { DecrementarAction, IncrementarAction } from './components/contador/contador.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador:number=0

  constructor(private store: Store<AppState>){
    this.store.select('contador').subscribe(state=>{
      this.contador = state
      //this.getPokemon()
    })
  }
  incrementar(){
    const accion = new IncrementarAction()
    this.store.dispatch(accion)
  }
  decrementar(){
    const accion = new DecrementarAction()
    this.store.dispatch(accion)
  }
}
