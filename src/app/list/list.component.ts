import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tasks: Task[];
  
  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.getTasks();
  }
  public getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => { this.tasks = tasks });
  }
  public saveChanges(e){
      this.taskService.updateTasks(e);
  }
}
