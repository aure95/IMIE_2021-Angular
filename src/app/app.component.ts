import { Component } from '@angular/core';
import { Arr } from './service/models/arr';
import { TestserviceService } from './service/testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  public tasks: Arr[] = [];

  private testService : TestserviceService;

  constructor(testService: TestserviceService) {
    this.testService = testService;
  }

  ngOnInit() {
    this.tasks = this.testService.getAllTasks();
    console.log(this.tasks)
  }
}
