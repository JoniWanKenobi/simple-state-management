import { Component, OnInit } from '@angular/core';
import { ToDoStateService, ToDo } from './STORE/to-do-state.service';
import { Observable } from 'rxjs';
import { AddToDoAction, SelectToDoAction, DeleteToDoAction, MarkAsDoneAction } from './STORE/to-do-actions';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css'],
  providers: [ToDoStateService]
})
export class ToDoContainerComponent implements OnInit {
  toDos$: Observable<ToDo[]> = this.stateService.toDos$;
  selectedToDo$: Observable<ToDo> = this.stateService.selectedToDo$;
  constructor(private stateService: ToDoStateService) { }

  ngOnInit() {
  }

  add(toDo: ToDo){
    const action: AddToDoAction = new AddToDoAction({toDo: toDo});
    this.stateService.execute(action);
  }

  select(toDoId: string){
    const action: SelectToDoAction = new SelectToDoAction({toDoId: toDoId});
    this.stateService.execute(action);
  }

  deleteToDo(toDoId: string){
    const action: DeleteToDoAction = new DeleteToDoAction({toDoId: toDoId});
    this.stateService.execute(action);
  }

  markAsDone(toDoId: string){
    const action: MarkAsDoneAction = new MarkAsDoneAction({toDoId: toDoId});
    this.stateService.execute(action);
  }

}
