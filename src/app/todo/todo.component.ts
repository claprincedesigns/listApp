import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  idCounter = 1;
  title = 'To-Do List';
  todoCount: number;
  newTodo: string;
  todos = [];

  constructor() { }

  ngOnInit() {
    this.todoCount = this.todos.length;
  }

  addTodo() {
    const todo = {
      id: this.idCounter,
      name: this.newTodo
    };
    this.todos.push(todo);


    this.newTodo = '';
    this.todoCount = this.todos.length;
    this.idCounter++;
  }

  deleteTodo(i) {
      this.todos.splice(i, 1);
      this.todoCount = this.todos.length;
  }
}
