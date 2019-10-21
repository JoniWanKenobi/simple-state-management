import { ToDoAction, ToDoActionType, AddToDoPayload, DeleteToDoPayload, MarkAsDonePayload, SelectToDoAction, SelectToDoPayload } from "./to-do-actions";
import { ToDoState, ToDo } from "./to-do-state.service";

export class ToDoReducer{
  constructor() {}

  reduce(action: ToDoAction, oldState: ToDoState): ToDoState{
    console.log('action: ', action);
    switch(action.type){
      case ToDoActionType.addToDo: return this.addToDo(action.payload, oldState);
      case ToDoActionType.deleteToDo: return this.deleteToDo(action.payload, oldState);
      case ToDoActionType.markAsDone: return this.markAsDone(action.payload, oldState);
      case ToDoActionType.selectToDo: return this.selectToDo(action.payload, oldState);
    }
  }

  private addToDo(payload: AddToDoPayload, oldState: ToDoState): ToDoState {
    const toDo: ToDo = payload.toDo;
    const toDos: ToDo[] = [toDo, ...oldState.toDos];
    console.log('todos: ', toDos)
    const newState: ToDoState = {...oldState, toDos};
    return newState;
  }

  private deleteToDo(payload: DeleteToDoPayload, oldState: ToDoState): ToDoState {
    const toDoId: string = payload.toDoId;
    const toDos: ToDo[] = [...oldState.toDos].filter( toDo => toDo.id !== toDoId);
    let selectedToDo = {...oldState.selectedToDo};
    if(selectedToDo && selectedToDo.id === toDoId) selectedToDo = null;
    const newState: ToDoState = {...oldState, toDos, selectedToDo};
    return newState;
  }

  private markAsDone(payload: MarkAsDonePayload, oldState: ToDoState): ToDoState {
    const toDoId: string = payload.toDoId;
    const toDos: ToDo[] = [...oldState.toDos].map( toDo => {
      if(toDo.id === toDoId) toDo.done = true;
      return toDo;
    });
    const newState: ToDoState = {...oldState, toDos};
    return newState;
  }

  private selectToDo(payload: SelectToDoPayload, oldState: ToDoState): ToDoState {
    const toDoId: string = payload.toDoId;
    const selectedToDo: ToDo = [...oldState.toDos].find( toDo => toDo.id === toDoId);
    const newState: ToDoState = {...oldState, selectedToDo};
    return newState;
  }




  
}