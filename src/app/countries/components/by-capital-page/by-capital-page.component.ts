import { Component, ElementRef, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  
public countries:Country[]=[]
 
  constructor(private countriesService: CountriesService) { }

  searchByCapital(term: string):void { 

   /*  console.log('desde BycapitalPage');
    console.log({ term }); */
    this.countriesService.searchCapital(term)
      .subscribe(countries => { this.countries = countries })
  }

}
