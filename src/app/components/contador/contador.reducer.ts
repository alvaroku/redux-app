import { Action } from "@ngrx/store";
import { DECREMENTAR, INCREMENTAR } from "./contador.actions";

export function contadorReducer(state:number = 1,action:Action){
    switch(action.type){
        case INCREMENTAR:
            return state+1
        case DECREMENTAR: 
            if(state-1 < 1){
                return state
            }
            return state-1
        default:
            return state
    }
}