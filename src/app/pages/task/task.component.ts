import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  activeId!: string;
  lists!: List[];
  tasks!: Task[];
  listId!: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.listId = params['listId'];
      if (params['listId']) {
        this.taskService.getTasks(params['listId']).subscribe((tasks: any) => {
          console.log('88', tasks);
          this.tasks = tasks;
        });
      }
    });

    this.taskService.getLists().subscribe((data: any) => {
      console.log('777', data);
      this.lists = data;
    });
  }

  setActive(id: string) {
    this.activeId = id;
  }

  // Toggle Task Completed
  onTaskComplete(task: Task) {
    this.taskService.completeTask(task).subscribe((taskData: any) => {
      console.log('12', taskData);
      task.completed = !task.completed;
    });
  }

  goToAddTask() {
    this.router.navigate(['add-task'], { relativeTo: this.route });
  }
}
