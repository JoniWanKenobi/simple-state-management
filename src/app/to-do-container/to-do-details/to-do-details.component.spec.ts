import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDetailsComponent } from './to-do-details.component';

describe('ToDoDetailsComponent', () => {
  let component: ToDoDetailsComponent;
  let fixture: ComponentFixture<ToDoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
