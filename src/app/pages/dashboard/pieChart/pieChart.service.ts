import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Info',
        stats: '',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Total tasks',
        stats: '',
        icon: 'refresh',
      }, {
        color: pieColor,
        description: 'Finished Tasks',
        stats: '',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'To do tasks',
        stats: '',
        icon: 'refresh',
      }
    ];
  }
}
