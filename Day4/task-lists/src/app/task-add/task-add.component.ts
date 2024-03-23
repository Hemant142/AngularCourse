import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();
  newTaskTitle: string = '';

  constructor() { }

  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      const task = new Task(this.newTaskTitle.trim(), false);
      this.taskAdded.emit(task);
      this.newTaskTitle = '';
    }
  }
}
