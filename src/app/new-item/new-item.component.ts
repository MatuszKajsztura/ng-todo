import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  // INFORMACJA DO RODZICA ŻE DODANO TASK:
  // tslint:disable-next-line:no-output-on-prefix
  // @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();

  newTask: Task;
  newTaskForm: FormGroup;
  id: number;

  constructor(private formBuilder: FormBuilder,
              private taskService: TaskService) { }

  ngOnInit() {
    this.newTaskForm = this.buildTaskForm();
  }

  buildTaskForm() {

    return this.formBuilder.group({
      id: '',
      name: '',
      date: '',
      done: false
    });
  }

  addTask() {
    this.newTask = this.newTaskForm.value;
    this.taskService.addTask(this.newTask);
    this.newTaskForm.reset();
    // INFORMACJA DO RODZICA ŻE DODANO TASK
    // this.onAdd.emit();
  }

}
