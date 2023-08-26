import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  activeId!: string;
  lists!: any[];
  tasks!: any[];

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.taskService.getTasks(params['listId']).subscribe((tasks: any) => {
        console.log('88', tasks);
        this.tasks = tasks;
      });
    });

    this.taskService.getLists().subscribe((data: any) => {
      console.log('777', data);
      this.lists = data;
    });
  }

  setActive(id: string) {
    this.activeId = id;
  }
}
