import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../service/models/task';

@Pipe({
  name: 'numberOfTasksDone',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[]): number {
    return tasks.filter(x => x.exec).length;
  }

}
