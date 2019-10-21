import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../STORE/to-do-state.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {
  @Output() add = new EventEmitter<ToDo>();

  newToDo: ToDo = {
    id: uuid.v4(),
    title: '',
    description: '',
    done: false
  }
  
  toDo: ToDo = {...this.newToDo};

  showForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addToDo(toDo: ToDo){
    this.add.emit(toDo);
    const id = uuid.v4();
    this.newToDo = {...this.newToDo, id};
    this.toDo = {...this.newToDo};
    this.showForm = false;
  }

}
