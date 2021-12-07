import { Component } from '@angular/core';
import { Task } from './service/models/task';
import { TestserviceService } from './service/testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    if (this.taskSelected) {
      this.testService.deleteTask(this.selectedTask.id) 
    }
  }

  public onSelect(task: Task) {
    this.taskSelected = !this.taskSelected;
    this.buttonMotiveSelected = this.buttonMotiveSelected == "+"? "-" : "+"; 
    console.log(this.buttonMotiveSelected);
    console.log(task.id);
    console.log(this.taskSelected)
  }
}
