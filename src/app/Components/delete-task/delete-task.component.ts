import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {

  @Output() tasksDeleted: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  deleteTasks(){
    this.tasksDeleted.emit(); 
    
  }
}
