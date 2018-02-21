import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

import { Task } from '../task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnChanges {
  @Input()
  public task: Task;
  
  public taskForm: FormGroup;
  
  constructor( private formBuilder : FormBuilder) { 
    this.createForm();    
  }

  createForm() {
    this.taskForm = this.formBuilder.group({
      done: '',
      name: ''
    });
  }

  ngOnChanges() {
    this.taskForm.patchValue({
      done: this.task.done,
      name: this.task.name
    });
  }
  
}
