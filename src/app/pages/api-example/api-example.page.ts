import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { ApiExampleService } from '../../services/api-example.service';

@Component({
  selector: 'app-api-example',
  templateUrl: './api-example.page.html',
  styleUrls: ['./api-example.page.scss'],
})
export class ApiExamplePage implements OnInit {
  public countries: Array<Country> = [];
  public countriesOriginal: Array<Country> = [];
  constructor(public apiExampleService: ApiExampleService) { }

  ngOnInit() {
    this.listCountries();
  }

  public listCountries() {
    if (this.countries.length === 0) {
      this.apiExampleService.getCountries().subscribe((res) => {
        this.countries = res;
        this.countriesOriginal = this.countries;
      });
    }
  }

  public search(event: string): void {
    if (!event) {
      this.listCountries();
      return;
    }
    this.countries = this.countries.filter((country) => {
      return country.translations.br
        .toLowerCase()
        .includes(event.toLowerCase());
    });
  }

  public clear(): void {
    this.countries = this.countriesOriginal;
    this.listCountries();
  }
}
