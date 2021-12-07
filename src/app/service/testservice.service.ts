import { Injectable } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  private tasks: Task[] = [];

  constructor() {
    this.tasks = this.initTasks();
  }

  protected initTasks(): Task[] {
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

  public getAllTasks(): Task[] {
    return this.tasks;
  }

  public addTask(task : Task): void {
    this.tasks.push(task);
  } 

  public deleteTask(id : number): void {
    this.tasks.splice(id, 1);
  }
  
}
