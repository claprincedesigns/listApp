import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'To-Do List';
  newTodo: string;
  todos = [
    {id: 0},
    {name: 'string'}
  ];


  constructor() {
    this.todos = [];
    this.newTodo = '';
  }

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
  }
  
  deleteTodo(name) {
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i]["name"] == name){
        this.todos.splice(i, 1);
      }
    }

     // this.todos = this.todos.filter(todo => todo.id !== id);
     // this.todos.splice(id, 1);
  }

  ngOnInit() {

  }

}
