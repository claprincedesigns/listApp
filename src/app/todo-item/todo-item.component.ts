import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: any;

  
  @Output()
  editing: EventEmitter<any> = new EventEmitter();

  isEditing = false;

  constructor() { }

  ngOnInit() {
  }

  emitEditing() {
    this.editing.emit(this.todo);
    this.isEditing = false;
  }


}
