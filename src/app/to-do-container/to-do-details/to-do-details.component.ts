import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../STORE/to-do-state.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {
  @Input() toDo: ToDo;

  @Output() deleteToDo = new EventEmitter<string>();
  @Output() markAsDone = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
