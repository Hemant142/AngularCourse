import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  onTaskAdded(task: Task) {
    this.taskService.addTask(task);
  }

  onTaskCompleted(event: any) {
    this.taskService.updateTaskStatus(event.target.checked, event.title);
  }
}
