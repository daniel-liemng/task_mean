import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequestService: WebRequestService) {}

  createList(title: string) {
    return this.webRequestService.post('api/lists', { title });
  }

  getLists() {
    return this.webRequestService.get('api/lists');
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`api/lists/${listId}/tasks`);
  }

  createTask(listId: string, title: string) {
    return this.webRequestService.post(`api/lists/${listId}/tasks`, { title });
  }

  completeTask(task: Task) {
    return this.webRequestService.patch(
      `api/lists/${task.listId}/tasks/${task._id}`,
      {
        completed: !task.completed,
      }
    );
  }
}
