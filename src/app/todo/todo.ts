import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class TodoComponent {
  newTask = '';
  todos: string[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.todos.push(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }
}
