import { Component, EventEmitter, Input,  OnInit,  Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {
  
  private debouncer:Subject<string>=new Subject<string>();



  @Input()
  public placeHolder: string = ""

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce:EventEmitter<string>=new EventEmitter();
//se crea undebounce para que el ususario ingrese el dato y sin necesidad de presionar enter, realice la busqueda luego de algun tiempo despues de presionar
  ngOnInit():void {
    this.debouncer
      .pipe(
        debounceTime(300)

      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }
  
  
  emiteValue(valuex: string): void {
    this.onValue.emit(valuex);
  }
 
  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);

  }
  
}
