import {Component} from '@angular/core';

import {BasicTablesService} from '../../basicTables.service';
import {ChartService} from "../../../../../../shared/services/chart.service";

@Component({
  selector: 'hover-table',
  template: require('./hoverTable.html')
})
export class HoverTable{

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService, private chartServ: ChartService) {
    this.metricsTableData = [];
  }

  ngOnInit(){
    this.getData();
  }

  private getData() {
    this.chartServ.getLeaderBoard()
      .subscribe(
        (response) => {
          console.log(response);
          this.metricsTableData = response;
        },
        error => {
          console.log(error);
        })
  }
}
