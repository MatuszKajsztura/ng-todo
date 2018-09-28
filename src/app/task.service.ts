import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { Task } from './task';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TaskService {
  private nextId = 1;

  private todos: Task[] = [];

  private tasksSubject = new BehaviorSubject<Task[]>(this.todos);

  constructor() { }

  getTasks(): Observable<Task[]> {

    const localStorageItem = JSON.parse(localStorage.getItem('todos'));

    if (localStorageItem.length) {
      this.tasksSubject.next(localStorageItem);
      this.todos = localStorageItem;
      this.nextId = this.todos[this.todos.length - 1].id + 1;
    }

    return this.tasksSubject.asObservable();
  }

  updateTask(e): void {
    const whichTask = this.todos.find(t => t.id === e.id); // przypisuje do zmiennej whichTask obiekt ktory spełnia warunek
    whichTask.name = e.name;
    whichTask.done = e.done;
    whichTask.date = e.date;

    this.updateState();
    }

  addTask(task: Task): void {
    this.todos.push(new Task(this.nextId, task.name, new Date(), task.done));
    this.nextId++;

    this.updateState();
  }

  deleteTask(task: Task): void {
    this.todos = this.todos.filter(e => e.id !== task.id);

    this.updateState();
    }

    updateState(): void {
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.tasksSubject.next(this.todos);
    }
}
