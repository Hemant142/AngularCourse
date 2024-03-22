import { Component } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [
    { title: 'Task 1', description: 'Description for Task 1', completed: false },
    { title: 'Task 2', description: 'Description for Task 2', completed: true },
    { title: 'Task 3', description: 'Description for Task 3', completed: false },
    { title: 'Task 4', description: 'Description for Task 4', completed: true },
    { title: 'Task 5', description: 'Description for Task 5', completed: false },
    { title: 'Task 6', description: 'Description for Task 6', completed: true },
    { title: 'Task 7', description: 'Description for Task 7', completed: false },
    { title: 'Task 8', description: 'Description for Task 8', completed: true },
    { title: 'Task 9', description: 'Description for Task 9', completed: false },
    { title: 'Task 10', description: 'Description for Task 10', completed: true }
  ];
}
