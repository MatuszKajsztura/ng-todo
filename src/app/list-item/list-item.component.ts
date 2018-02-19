import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  @Input()
  public task: Task;

  constructor() { }

  ngOnInit() {
  }

}
