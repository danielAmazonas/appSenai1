import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Country } from '../models/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiExampleService {
  public baseUrlRestCountries: string = environment.baseUrlRestCountries;

  constructor(public httpClient: HttpClient) { }

  public getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.baseUrlRestCountries + 'all');
  }
}
