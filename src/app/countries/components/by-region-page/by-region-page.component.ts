import { CountriesService } from './../../services/countries.service';
import { Component, Input } from '@angular/core';
import { Region } from '../../interfaces/region';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  @Input()
  public regions: Region[] = [];
  constructor(private countriesService: CountriesService) { }
  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term)
      .subscribe(r => {this.regions = r})
       }

}
