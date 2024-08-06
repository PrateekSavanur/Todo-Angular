import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = [];
  newTodoDesc: string = '';

  constructor() {
    this.todos = [];
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  addTodo() {
    if (this.newTodoDesc.trim()) {
      const newTodo: Todo = {
        sno: this.todos.length + 1,
        title: `Todo ${this.todos.length + 1}`,
        desc: this.newTodoDesc,
        active: true,
      };
      this.todos.push(newTodo);
      this.newTodoDesc = '';
    }
  }
}
