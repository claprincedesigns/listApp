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
  todos = ['Milk'];


  constructor() {}

  ngOnInit() {
    this.todoCount = this.todos.length;
  }

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
    this.todoCount = this.todos.length;
  }
  
  deleteTodo(i) {
      this.todos.splice(i, 1);
    }

     // this.todos = this.todos.filter(todo => todo.id !== id);
     
      /*for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i]["name"] == name){
        this.todos.splice(i, 1);
      } */


}
