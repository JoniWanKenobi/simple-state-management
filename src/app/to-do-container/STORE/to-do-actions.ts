import { ToDo } from "./to-do-state.service";

export enum ToDoActionType {
  addToDo = 'addToDo',
  deleteToDo = 'deleteToDo',
  markAsDone = 'markAsDone',
  selectToDo = 'selectToDo'
}

export interface ToDoAction {
  type: ToDoActionType;
  payload: any;
}

export interface AddToDoPayload{
  toDo: ToDo
}

export interface DeleteToDoPayload{
  toDoId: string
}

export interface MarkAsDonePayload{
  toDoId: string
}

export interface SelectToDoPayload{
  toDoId: string
}

export class AddToDoAction implements ToDoAction{
  readonly type: ToDoActionType = ToDoActionType.addToDo;
  constructor(public payload: AddToDoPayload){}
}

export class DeleteToDoAction implements ToDoAction{
  readonly type: ToDoActionType = ToDoActionType.deleteToDo;
  constructor(public payload: DeleteToDoPayload){}
}

export class MarkAsDoneAction implements ToDoAction{
  readonly type: ToDoActionType = ToDoActionType.markAsDone;
  constructor(public payload: MarkAsDonePayload){}
}

export class SelectToDoAction implements ToDoAction{
  readonly type: ToDoActionType = ToDoActionType.selectToDo;
  constructor(public payload: SelectToDoPayload){}
}