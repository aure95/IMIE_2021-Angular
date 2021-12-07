import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../service/models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {


  @Output() newTaskEvent = new EventEmitter();
  task: Task;

  constructor() {
    this.task = new Task();
  }

  ngOnInit(): void {
   
  }

  public onSubmit() : void {
    
    this.newTaskEvent.emit({task : this.task});
    this.task = new Task();
  }

}
