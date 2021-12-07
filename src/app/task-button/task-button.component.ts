import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-button',
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss']
})
export class TaskButtonComponent implements OnInit {

  @Input() motive!: String;
  @Input() onclick !: Function;

  currentMotive!: String

  constructor() { }

  ngOnInit(): void {
    this.currentMotive = this.motive;
  }

  public onClick() : void {
    this.onclick();
    console.log("task-button clicked");
  }

}
