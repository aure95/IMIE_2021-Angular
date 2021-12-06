import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-button',
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss']
})
export class TaskButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() : void {
    console.log("task-button clicked");
  }

}
