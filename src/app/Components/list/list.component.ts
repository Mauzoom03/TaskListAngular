import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  tasks: { name: string, completed: boolean }[] = [];

  onTaskAdded(task: { name: string, completed: boolean }) {
    this.tasks.push(task);
  }
}
