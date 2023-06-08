import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { ITodo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  public todos$$: Observable<ITodo[]> = this.todoService.todos$;

  constructor(private todoService: TodoService) {}

  removeTodo(todo: ITodo): void {
    this.todoService.removeTodo(todo).subscribe();
  }
}
