import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { List } from '../models/list.model';

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
}
