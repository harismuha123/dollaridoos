import { Component } from '@angular/core';
import { Http } from '@angular/http';

interface ResponseType {
  convertedAmount: number;
  fromCurrency: string;
  toCurrency: string;
  amount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private http: Http;
  private currencyType: ResponseType;
  private finalValue: number;
  private value: ResponseType;

  constructor(http: Http) {
    this.http = http;
    this.http.get('http://localhost:5000/converter/list').subscribe((res) => {
      this.currencyType = res.json();
    });
  }

  convertValue(initialValue, initialKey, finalKey) {
    this.http.get('http://localhost:5000/converter/convert?fromCurrency='+initialKey+'&toCurrency='+finalKey+'&amount='+initialValue).subscribe((val) => {
      this.value = val.json();
      this.finalValue = this.value.convertedAmount;
    });
  }
}
