import { Component } from '@angular/core';
import { Countries } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  

  public countries: Countries[] = []

  constructor(private countriesService: CountriesService) { }
  
  searchByCountry(term: string): void{
    this.countriesService.searchCountry(term)
      .subscribe(country => {this.countries = country})

   }





}
