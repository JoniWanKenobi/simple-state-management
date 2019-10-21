import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../STORE/to-do-state.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input() toDos: ToDo[];
  @Input() selectedToDo: ToDo;


  @Output() select = new EventEmitter<string>();
  @Output() add = new EventEmitter<ToDo>();

  

  constructor() { }

  ngOnInit() {
  }

}
