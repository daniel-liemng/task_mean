import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { List } from 'src/app/models/list.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent {
  title!: string;

  constructor(private taskService: TaskService, private router: Router) {}

  onCreateList() {
    if (!this.title) {
      return alert('Please enter the title');
    }

    this.taskService.createList(this.title).subscribe((list: any) => {
      console.log(list);
      this.router.navigate(['/lists', list._id]);
    });
  }
}
