import { Component } from '@angular/core';
import { Http } from '@angular/http';

interface ResponseType {
  base: string;
  date: string;
  rates: {[key: string]: number};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private http: Http;
  private nesto: ResponseType;
  private currencies: string[];
  private finalValue: number;
  private currencyValues = {
    'AUD': {
      'EUR': 0.68,
      'BGN': 1.22
    }
  }

  constructor(http: Http) {
    this.http = http;
    this.http.get('https://api.fixer.io/latest?base=USD').subscribe((res) => {
      this.nesto = res.json();
      this.currencies = Object.keys(this.nesto.rates);
    });
  }

  convertValue(initialValue, initialKey, finalKey) {
    if (this.currencyValues[initialKey]) {
      this.finalValue = initialValue * this.currencyValues[initialKey][finalKey];
    }
    console.log('Value not available');
  }
}
