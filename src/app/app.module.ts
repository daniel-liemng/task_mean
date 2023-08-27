import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './pages/task/task.component';
import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { AddListComponent } from './components/add-list/add-list.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, TitleComponent, AddListComponent, AddTaskComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
