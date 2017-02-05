import {Component, ViewEncapsulation, Input, SimpleChanges, OnChanges} from '@angular/core';

import {PieChartService} from './pieChart.service';

import './pieChart.loader.ts';
import {Task} from "../../../models/task.model";
import {User} from "../../../models/user.model";

@Component({
  selector: 'pie-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./pieChart.scss')],
  template: require('./pieChart.html')
})
// TODO: move easypiechart to component
export class PieChart implements OnChanges{

  @Input()
  tasks: Array<Task>;
  @Input()
  user: User;
  public chartData: Array<Object>;
  private _init = false;

  constructor(private _pieChartService: PieChartService) {
    this.chartData = this._pieChartService.getData();
  }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._init = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    let finishedTasks = 0;
    if(changes['tasks']) {
      let currentTasks = changes['tasks'].currentValue;
      for (let i = 0; i < currentTasks.length; i++) {
        if (currentTasks[i].isFinished === true) finishedTasks++;
      }
      if(this.user)
        this.chartData[0]['stats'] = this.user.firstName + " " + this.user.lastName;
      this.chartData[1]['stats'] = currentTasks.length;
      this.chartData[2]['stats'] = finishedTasks;
      this.chartData[3]['stats'] = currentTasks.length - finishedTasks;
      console.log(currentTasks);
    }

  }

  print(){
      console.log(this.tasks);
  }

  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }
}
