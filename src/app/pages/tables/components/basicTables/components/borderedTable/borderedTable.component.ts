import {Component} from '@angular/core';

import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'bordered-table',
  template: require('./borderedTable.html'),
})
export class BorderedTable {

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData2;
  }

  public test(){
    this.metricsTableData = this._basicTablesService.metricsTableData2;
  }
}
