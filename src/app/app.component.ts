import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './service/models/task';
import { TestserviceService } from './service/testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() newtaskEvent = new EventEmitter();
  title = 'test';

  private testService : TestserviceService;

  public tasks: Task[] = [];
  motiveButton: string[] = ["+", "-"];
  buttonMotiveSelected: String = "+";
  private taskSelected: boolean = false;
  private selectedTask!: Task;

  constructor(testService: TestserviceService) {
    this.testService = testService;
    this.motiveButton = ["+", "-"];
    this.selectedTask;
  }

  ngOnInit() {
    this.tasks = this.testService.getAllTasks();
    this.taskSelected = this.taskSelected;
    this.buttonMotiveSelected = this.buttonMotiveSelected;
  }

  public onClickButton(): void{
    // if (this.taskSelected) {
    //   this.testService.deleteTask(this.taskSelected) 
    // }
  }

  public onCheck(task : Task) {
    console.log("onCheck");
    task.exec = true;
    // this.testService.deleteTask(task)
  }

  public onSelect(task: Task) {
    this.taskSelected = !this.taskSelected;
    this.buttonMotiveSelected = this.buttonMotiveSelected == "+"? "-" : "+"; 
    console.log(this.buttonMotiveSelected);
    console.log(task.id);
    console.log(this.taskSelected)
  }

  public onSubmit(newTaskEvent: any) {
    console.log(newTaskEvent.task);
    this.testService.addTask(newTaskEvent.task);
    
  }

}
