import { Component, Input } from '@angular/core';
import { Countries } from '../../interfaces/countries';

@Component({
  selector: 'pais-table',
  templateUrl: './pais-table.component.html',
  styles: [
    `img{width:25px}`
  ]
})
export class PaisTableComponent {
  @Input()
  public countrie:Countries[] = [];

}
