import {Component, ViewEncapsulation} from '@angular/core';

import {CalendarService} from './calendar.service';

@Component({
  selector: 'calendar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./calendar.scss')],
  template: require('./calendar.html')
})
export class Calendar {

  public calendarConfiguration:any;
  private _calendar:Object;

  constructor(private _calendarService:CalendarService) {
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
    this.calendarConfiguration.eventDragged = (event, delta, revertFunc, jsEvent, ui, view) => {

      alert(event.title + " was dropped on " + event.start.format());

      if (!confirm("Are you sure about this change?")) {
        revertFunc();
      }

    }
  }

  getNewData(){
    console.log(":)):((");
    jQuery(this._calendar).fullCalendar('removeEvents');

    console.log("here a");
  }

  public onCalendarReady(calendar):void {
    console.log("here b");
    this._calendar = calendar;
  }

  private _onSelect(start, end):void {

    if (this._calendar != null) {
      let title = prompt('Event Title:');
      let eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      }
      jQuery(this._calendar).fullCalendar('unselect');
    }
  }
}
