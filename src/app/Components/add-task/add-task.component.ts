import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  showInput: boolean = false;
  newTask: string = '';
  tasks: { name: string, completed: boolean }[] = [];

  @Output() taskAdded: EventEmitter<{ name: string, completed: boolean }> = new EventEmitter<{ name: string, completed: boolean }>();

  toggleInput() {
    this.showInput = !this.showInput;
    if (!this.showInput) {
      this.newTask = '';
    }
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.taskAdded.emit({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }
}
