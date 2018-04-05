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
  todos = [{
    id: 0,
    name: 'milk'
  }];

  constructor() { }

  ngOnInit() {
    this.todoCount = this.todos.length;
  }

  addTodo() {
    const todo = {
      id: this.idCounter,
      name: this.newTodo
    }
    this.todos.push(todo);
    

    this.newTodo = '';
    this.todoCount = this.todos.length;
    this.idCounter++;
  }
  
  deleteTodo(i) {
      this.todos.splice(i, 1);
  }

  updateTodo(i) {
    // add an click to edit or icon(bonus)
    // flag isEditing boolean to check the state of the item
    // if isEditing is true show input box; if false don't show it
    // 
    // shouldn't save if the string is empty
    // can cancel edits
    // and test
    //create a new component for todoItem
  }

     // this.todos = this.todos.filter(todo => todo.id !== id);
     
      /*for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i]["name"] == name){
        this.todos.splice(i, 1);
      } */


}
