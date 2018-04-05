import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should render title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent).toEqual('To-Do List');
  }));

  it('should display the count of todos', async(() => {
    component.todoCount = 5;
    fixture.detectChanges();

    expect(compiled.querySelector('.header p').textContent).toContain('5');
  }));

  it('should display an item in list for each todos', () => {
    component.todos = ['Rubbing Lotion', 'Basketball', 'Cake'];
    fixture.detectChanges();

    expect(compiled.querySelectorAll('li').length).toEqual(3);
    expect(compiled.querySelectorAll('li')[0].textContent).toContain('Rubbing Lotion');
  });
});
