import { CountriesService } from './../../services/countries.service';
import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  
  
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) { }
  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.countriesService.searchRegion(term)
      .subscribe(r => {this.countries = r})
       }

}
