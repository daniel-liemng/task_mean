import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'add-list', component: AddListComponent },
  { path: 'lists/:listId/add-task', component: AddTaskComponent },
  { path: 'lists', component: TaskComponent },
  { path: 'lists/:listId', component: TaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
