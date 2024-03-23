import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() completed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onCompletedChange(event: any) {
    const completed: boolean = event.target.checked;
    this.completed.emit(completed);
  }
}
