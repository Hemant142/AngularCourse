import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTaskStatus(title: string, completed: boolean) {
    const task = this.tasks.find(task => task.title === title);
    if (task) {
      task.completed = completed;
    }
  }
}
