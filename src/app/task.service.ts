import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Task } from './task';

@Injectable()
export class TaskService {

  private TASKS: Task[] = [
      new Task('zadanie 1', new Date(2018,1,2)),
      new Task('zadanie 2', new Date(2018,10,20)),
      new Task('zadanie 3'),
      new Task('zadanie 4'),  
    ];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.TASKS.slice());
  }
}
