import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

 
    

  searchByCapital(term: string):void { 

    console.log('desde BycapitalPage');
    console.log({ term });
  }

}
