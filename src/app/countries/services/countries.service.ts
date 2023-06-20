import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';
import { Countries } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1'
  constructor(private http: HttpClient) { }

  searchCapital(term: string):Observable<Country[]> { 
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
      catchError(error => of([]))
    )
  }
  searchCountry(term: string):Observable<Countries[]> { 
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Countries[]>(url)
      .pipe(
        catchError(error => of([]))
        
    )

  }
  searchRegion(term: string) { }

}