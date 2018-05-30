import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { Task } from './task';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TaskService {

  private TASKS: Task[] = [
      new Task('1', 'zadanie 1', new Date(2018, 1, 2)),
      new Task('2', 'zadanie 2', new Date(2018, 10, 20), true),
    ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.TASKS);

  constructor() { }

  getTasks(): Observable<Task[]> {
    // return of(JSON.parse(JSON.stringify(this.TASKS)));
    // this.tasksSubject.next(this.TASKS);
    return this.tasksSubject.asObservable();
  }

  updateTask(e): void {
    const whichTask = this.TASKS.find(t => t.id === e.id); // przypisuje do zmiennej whichTask obiekt ktory spełnia warunek
    // console.log('Serwis aktualizuje zadanie nr: ' + whichTask.id);
    whichTask.name = e.name;
    whichTask.done = e.done;
    whichTask.date = e.date;
    console.log('UPDATE, Aktualny stan w serwisie: ', this.TASKS);
    this.tasksSubject.next(this.TASKS);
    }

  // updateTask(e): Observable<Task> {
  //   // const whichTask = this.TASKS.find(t => t.id === e.id);
  //   return this.TASKS
  //     .map((t) => {
  //         t.date = e.date
  //         t.done = e.done
  //         t.name = e.name
  //       });
  //   }

  addTask(task: Task): void {
    const id = 'id-' + Math.random().toString(36).substr(2, 16);
    this.TASKS.push( new Task(id, task.name, task.date, task.done));
    console.log('ADD, Aktualny stan w serwisie: ', this.TASKS);
    this.tasksSubject.next(this.TASKS);
  }

  deleteTask(task: Task): void {
    // console.log('Serwis usuwa zadanie: ' + task.id);
    this.TASKS = this.TASKS.filter(e => e.id !== task.id);
    console.log('DELETE, Aktualny stan w serwisie: ', this.TASKS);
    this.tasksSubject.next(this.TASKS);
    }
}
