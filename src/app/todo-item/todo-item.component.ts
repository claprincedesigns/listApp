import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: any;
  todoCount: number;
  todos = [];

  @Output()
  editing: EventEmitter<any> = new EventEmitter();
  deleting: EventEmitter<any> = new EventEmitter();

  isEditing = false;
  isDeleting = true;

  constructor() { }

  ngOnInit() {
  }

  emitEditing() {
    this.editing.emit(this.todo);
    this.isEditing = false;
  }

  // delete() {
  //   this.deleting.emit(this.todo);
  // }

  deleteTodo(todo) {
    this.deleting.emit(this.todo);
    this.todo.splice(todo, 1);
    this.todoCount = this.todo.length;
  }

}
