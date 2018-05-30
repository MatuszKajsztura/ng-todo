import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  @Input()
  public task: Task;
  // komunikacja za pomocą output:
  // // tslint:disable-next-line:no-output-on-prefix
  // @Output()
  // public onChange: EventEmitter<string> = new EventEmitter<string>();
  // // tslint:disable-next-line:no-output-on-prefix
  // @Output()
  // public onDelete: EventEmitter<string> = new EventEmitter<string>();

  public taskForm: FormGroup;

  constructor(
  private formBuilder: FormBuilder,
  private taskService: TaskService) { }

  ngOnInit() {
    this.createForm();
    this.loadFormValues();
  }

  public createForm() {
    this.taskForm = this.formBuilder.group({
      id: '',
      name: '',
      date: '',
      done: '',
    });
  }

  public loadFormValues() {
    this.taskForm.patchValue(this.task);
  }

  public updateTask() {
    this.taskService.updateTask(this.taskForm.value); // emit prosto do serwisu
    // this.onChange.emit(this.taskForm.value); // emit stanu formularza do rodzica list
  }

  public deleteTask() {
    this.taskService.deleteTask(this.task);
    // this.onDelete.emit();
  }
}
