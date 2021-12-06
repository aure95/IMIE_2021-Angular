import { Injectable } from '@angular/core';
import { Arr } from './models/arr';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  private tasks: Arr[] = [];

  constructor() {
    this.tasks = this.initTasks();
  }

  protected initTasks(): Arr[] {
    var tasks  = [
      {
        "id" : 1,
        "title" : "task1"
      },
      {
        "id" : 2,
        "title" : "task3"
      },
      {
        "id" : 3,
        "title" : "task3"
      },
      {
        "id" : 4,
        "title" : "task4"
      }
    ]; 
    return tasks;
  }

  public getAllTasks(): Arr[] {
    return this.tasks;
  }

  public addTask(task : Arr): void {
    this.tasks.push(task);
  } 

  public deleteTask(id : number): void {
    this.tasks.splice(id, 1);
  }
  
}
