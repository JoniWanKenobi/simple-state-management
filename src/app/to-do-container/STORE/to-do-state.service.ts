import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {pluck, distinctUntilChanged} from 'rxjs/operators';
import { ToDoAction } from "./to-do-actions";
import { ToDoReducer } from "./to-do-reducers";

export interface ToDo{
  id: string
  title: string
  description: string
  done: Boolean
}

export interface ToDoState{
  toDos: ToDo[]
  selectedToDo: ToDo
}

@Injectable()

export class ToDoStateService{
  private reducer = new ToDoReducer();

  private _state: ToDoState = {
    toDos: [],
    selectedToDo: null
  }

  private store: BehaviorSubject<ToDoState> = new BehaviorSubject(this._state);
  private store$: Observable<ToDoState> = this.store.asObservable();

  public toDos$: Observable<ToDo[]> = this.store$.pipe(pluck('toDos'), distinctUntilChanged()) as Observable<ToDo[]>;
  public selectedToDo$: Observable<ToDo> = this.store$.pipe(pluck('selectedToDo'), distinctUntilChanged()) as Observable<ToDo>;


  constructor(){this.loadToDos()}

  private loadToDos(){
    //here you initialize the state, fetching from the backend, possibly through another service
    const toDos: ToDo[] = []
    const newState = {...this._state, toDos};
    setTimeout(()=> {this.updateState(newState)}, 1000) 
  }
  
  private updateState(newState: ToDoState){
    this.store.next(this._state = {...newState}); //note I keep in this._state always the latest copy of the state
    console.log('new state: ', this._state);
  }

  public execute(action: ToDoAction){
    const newState = this.reducer.reduce(action, this._state);
    this.updateState(newState);
  }
}