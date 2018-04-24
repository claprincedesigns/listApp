import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;

  @Input() index: number;
   
  @Output() deleting: EventEmitter<any> = new EventEmitter();

  isEditing = false;

  constructor() { }

  ngOnInit() {
  }

  emitDeleting() {
    this.deleting.emit(this.index);
  }

}
