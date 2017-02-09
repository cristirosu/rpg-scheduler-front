import {Component, ViewChild, ViewEncapsulation, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import {CalendarService} from './calendar.service';

@Component({
  selector: 'calendar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./calendar.scss')],
  template: require('./calendar.html')
})
export class Calendar {
 
  @Input() calendarConfiguration:Object;
  @Output() onCalendarReady = new EventEmitter<any>();

  @ViewChild('calendar') private _selector:ElementRef;

  ngAfterViewInit() {
    let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.calendarConfiguration);
    this.onCalendarReady.emit(calendar);
  }
}
