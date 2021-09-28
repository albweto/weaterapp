import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeaterService {

  URL: string ='';
  URLM: string ='';
  apiKey = '28f4a7006d2cc312261e28aaf1eff463';
  constructor(private httpclient: HttpClient) {
    this.URL =`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
    this.URLM =`https://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeater(cityName: string){
    return this.httpclient.get(`${this.URL}${cityName}`);
  }
  getWeatermultiple(cityName: string){
    return this.httpclient.get(`${this.URLM}${cityName}`);
  }

}
