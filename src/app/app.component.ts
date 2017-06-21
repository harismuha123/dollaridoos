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
  private value: ResponseType;
  private initialValue: number;
  private finalValue: number;
  private initialKey: string;
  private finalKey: string;

  constructor(http: Http) {
    this.http = http;
    this.http.get('http://localhost:5000/converter/list').subscribe((res) => {
      this.currencyType = res.json();
    });
  }

  onKey(event: any) {
    this.http.get('http://localhost:5000/converter/convert?fromCurrency='+this.initialKey+'&toCurrency='+this.finalKey+'&amount='+this.initialValue).subscribe((val) => {
      this.value = val.json();
      this.finalValue = this.value.convertedAmount;
    });
  }
}
