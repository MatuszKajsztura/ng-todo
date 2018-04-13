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
  public task: Task = new Task(null, '');
  @Output()
  public onChange = new EventEmitter();

  public taskForm: FormGroup;
  
  constructor(
    // private taskService: TaskService, 
    private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.createForm();
    this.loadFormValues();    
    // this.save();
    this.taskForm.valueChanges
    .subscribe(
      (value) => {
        this.onChange.emit(value); // emit do EventEmmiter
      }
    );
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
  // public save() {
    // this.taskForm.get('name').valueChanges.subscribe((a)=>{ this.task.name=a })
    // this.taskForm.valueChanges.subscribe((f)=>{ 
      // console.log(f)
      // this.taskService.updateTask(f);
      // this.task.name = f.name;
      // this.task.done = f.done; 
    // });
  // }
}
