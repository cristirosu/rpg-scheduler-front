import {Component, OnInit} from '@angular/core';
import {ChartistJsService} from "./chartistJs.service";
import {ChartService} from "../../../../shared/services/chart.service";

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.html'
})
export class BarChartDemoComponent implements OnInit{
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September','October','November','December'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public taskChartData: any;

  public lineChartData:Array<any>= [{},{}];
  public lineChartType:string = 'line';

  public pieChartType:string = 'pie';
  // Pie
  public pieChartLabels:string[] = ['To do tasks', 'Late tasks'];
  public pieChartData:number[] = [300, 500, 0,0,0];

  public doughnutChartLabels:string[] = ['Finished Late', 'Late Not Finished', 'On time', 'Not finished'];
  public doughnutChartData:number[] = [350, 450, 100, 100];
  public doughnutChartType:string = 'doughnut';

  constructor(private chartService: ChartistJsService,
              private chartServ: ChartService){}

  ngOnInit(){
    this.getTaskData();
    this.getBarChartData();
    this.getLineChartData();
    this.getPieChartData();
    this.getDoughnutCartData();
  }

  getTaskData(){
    this.taskChartData = this.chartService.getTaskData();
  }

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgb(100,10,24)',
      borderColor: 'rgb(100,10,24)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgb(50,10,180)',
      borderColor: 'rgb(225,10,24)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

  // events
  public chartClicked(e:any):void {
    this.lineChartData[0] = [28, 48, 40, 19, 86, 27, 90];

  }

  public chartHovered(e:any):void {
    console.log(e);
  }


  private getBarChartData() {
    this.chartServ.getBarChartData()
      .subscribe(
        (response) => {
          this.taskChartData = response;
        },
        error => {
          console.log(error);
        })
  }

  private getLineChartData() {
    this.chartServ.getLineChartData()
      .subscribe(
        (response) => {
          this.lineChartData = response[0].values;
        },
        error => {
          console.log(error);
        })
  }

  private getPieChartData() {
    this.chartServ.getPieChartData()
      .subscribe(
        (response) => {
          console.log(response);
          this.pieChartData = response.values;
        },
        error => {
          console.log(error);
        })
  }

  private getDoughnutCartData() {
    this.chartServ.getDoughnutChartData()
      .subscribe(
        (response) => {
          console.log(response);
          this.doughnutChartData = response.values;
        },
        error => {
          console.log(error);
        })
  }
}
