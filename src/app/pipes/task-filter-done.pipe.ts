import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../service/models/task';

@Pipe({
  name: 'taskFilterDone'
})
export class TaskFilterDonePipe implements PipeTransform {

  transform(tasks: Task[], filterDone: boolean): Task[] {
    return tasks.filter(x => filterDone? !x.exec : x.exec);
  }

}
