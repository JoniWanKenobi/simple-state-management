import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';
import { ToDoListComponent } from './to-do-container/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './to-do-container/to-do-list-item/to-do-list-item.component';
import { ToDoDetailsComponent } from './to-do-container/to-do-details/to-do-details.component';
import { NewToDoComponent } from './to-do-container/new-to-do/new-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoContainerComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToDoDetailsComponent,
    NewToDoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
