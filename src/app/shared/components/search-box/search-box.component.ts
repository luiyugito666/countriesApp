import { Component, EventEmitter, Input,  OnDestroy,  OnInit,  Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  
  
  private debouncer: Subject<string> = new Subject<string>();
  
  private debounceSubscription?: Subscription;


  @Input()
  public initialValue: string="";
  @Input()
  public placeHolder: string = ""

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();
  
//se crea undebounce para que el ususario ingrese el dato y sin necesidad de presionar enter, realice la busqueda luego de algun tiempo despues de presionar
  ngOnInit():void {
    this.debounceSubscription=this.debouncer
      .pipe(
        debounceTime(300)

      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  //para destruir las subscripciones del debouncer, para mantener la limpieza para no ocupar memoria
  ngOnDestroy(): void {
 this.debounceSubscription?.unsubscribe();

  }
  emiteValue(valuex: string): void {
    this.onValue.emit(valuex);
  }
 
  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);

  }
  
}
