import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  constructor() { }

  onTaskCompleted(completed: boolean, title: string) {
    // Handle the completion of tasks here
    console.log(`Task "${title}" completed: ${completed}`);
  }
}
