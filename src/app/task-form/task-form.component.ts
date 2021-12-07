import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  task?: Task;

  constructor() {}

  ngOnInit(): void {
  }

  public onSubmit(taskForm: NgForm) : void {
    console.log("submit")
    console.log()
  }

}
