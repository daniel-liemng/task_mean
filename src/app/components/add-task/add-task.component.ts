import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  title!: string;
  listId!: string;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('task', params);
      this.listId = params['listId'];
    });
  }

  onCreateTask() {
    if (!this.title) {
      return alert('Please enter the title');
    }

    this.taskService
      .createTask(this.listId, this.title)
      .subscribe((task: any) => {
        console.log(task);
      });

    this.router.navigate(['/lists', this.listId]);
  }
}
