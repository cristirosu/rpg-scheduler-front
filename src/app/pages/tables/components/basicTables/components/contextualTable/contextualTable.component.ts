import {Component} from '@angular/core';

@Component({
  selector: 'contextual-table',
  template: require('./contextualTable.html'),
})
export class ContextualTable {

  private data: any = {
    test: 1234
  };

  constructor() {
  }
}
