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
    // this.taskService.getTasks() // pobranie listy taskow z serwisu
    // .subscribe(tasks => {
    //   this.tasks = tasks;
    //   console.log('get tasks', this.tasks);
    // });
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
    });

  }

  public updateTask(formValue) {
      this.taskService.updateTask(formValue); // przesłanie zmienonego zadania do serwisu
      // this.getTasks(); // pobranie listy tasków po zakutalizowaniu zadania
  }
}
