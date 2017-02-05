import {Injectable} from '@angular/core';

@Injectable()
export class ChartistJsService {

  public getTaskData(): any{
      return [
      { data: [65, 59, 80, 81, 56, 120],
        label: 'Finished on time'
      },
      {data: [28, 48, 40, 19, 86, 27], label: 'Finished late'}
    ];
  }

}
