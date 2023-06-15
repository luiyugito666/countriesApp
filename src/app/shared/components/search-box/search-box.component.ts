import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string = ""

  @Output()
  public onValue:EventEmitter<string>=new EventEmitter();

  emiteValue(valuex: string): void { 
    this.onValue.emit(valuex);
  }
 


}
  

