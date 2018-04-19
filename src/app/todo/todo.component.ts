import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'To-Do List';
  todoCount: number;
  newTodo: string;
  todos = [{
    name: 'milk'
  }];

  constructor() { }

  ngOnInit() {
    this.todoCount = this.todos.length;
  }

  addTodo() {
    const todo = {
      name: this.newTodo
    };
    this.todos.push(todo);
    
    this.newTodo = '';
    this.todoCount = this.todos.length;
  }

  deleteTodo(i) {
    this.todos.splice(i, 1);
    this.todoCount = this.todos.length;
  } 
}
