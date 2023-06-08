import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITodo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: 'todo-edit.component.html',
  styleUrls: ['todo-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditComponent {
  @Input() todo?: ITodo;

  constructor(private todoService: TodoService) {
  }

  updateTodo(): void {
    if (this.todo) {
      this.todoService.editTodo(this.todo).subscribe(
        () => {
        },
        (error) => {
          console.error('Error occurred while updating todo item:', error);
        }
      );
    }
  }
}
