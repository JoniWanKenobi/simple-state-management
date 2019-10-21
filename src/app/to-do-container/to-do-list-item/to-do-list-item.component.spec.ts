import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListItemComponent } from './to-do-list-item.component';

describe('ToDoListItemComponent', () => {
  let component: ToDoListItemComponent;
  let fixture: ComponentFixture<ToDoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
