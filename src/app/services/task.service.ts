import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

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
}
