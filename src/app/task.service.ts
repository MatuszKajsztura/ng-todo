import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  private TASKS: Task[] = [
      new Task(1, 'zadanie 1', new Date(2018, 1, 2)),
      new Task(2, 'zadanie 2', new Date(2018, 10, 20), true),
    ];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(JSON.parse(JSON.stringify(this.TASKS)));
  }

  updateTask(e): void {
    const whichTask = this.TASKS.find(t => t.id === e.id); // przypisuje do zmiennej whichTask obiekt ktory spełnia warunek
    console.log('Serwis aktualizuje zadanie nr: ' + whichTask.id);
    whichTask.name = e.name;
    whichTask.done = e.done;
    console.log('Aktualny stan w serwisie: ', this.TASKS);
  }

  addTask(task: Task): void {
    let id = this.TASKS.length + 1;
    this.TASKS.push( new Task(id, task.name, task.date, task.done));
    console.log('Aktualny stan w serwisie: ', this.TASKS);
  }
}
