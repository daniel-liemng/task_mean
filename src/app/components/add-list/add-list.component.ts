import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

    this.taskService.createList(this.title).subscribe((data) => {
      console.log(data);
    });

    this.router.navigateByUrl('/');
  }
}
