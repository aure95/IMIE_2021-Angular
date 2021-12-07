import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Task } from '../service/models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  @Input() tasks!: Task[];
  @Input() onselect!: Function;

  constructor() { }

  ngOnInit(): void {
     
  }

  // public onSelect(task: Task) {
  //   this.onselect;
  // }

}
