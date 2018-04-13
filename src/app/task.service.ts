import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Task } from './task';

@Injectable()
export class TaskService {

  private TASKS: Task[] = [
      new Task(1,'zadanie 1', new Date(2018,1,2)),
      new Task(2,'zadanie 2', new Date(2018,10,20)), 
    ];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(JSON.parse(JSON.stringify(this.TASKS)));
  }
  updateTasks(e): void {
    const whichTask = this.TASKS.find(t => t.id === e.id);
    whichTask.name = e.name;
    whichTask.done = e.done;
    console.log(this.TASKS)
  }
}
