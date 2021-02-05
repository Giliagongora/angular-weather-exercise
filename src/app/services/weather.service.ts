import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'd74e0954da2038f2e35e1113d1bec0e9';
  URI : string = '';

  constructor(private http: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${this.apiKey}&q=units=metrics&q=`;
    /* this.URI = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=' + {this.apiKey}; */
   }

   getWeather(cityName: string, countryCode: string){
      return this.http.get(`${this.URI}${cityName},${countryCode}`)
   }

}
