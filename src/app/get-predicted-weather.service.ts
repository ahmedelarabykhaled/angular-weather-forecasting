import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPredictedWeatherService {

  constructor( private _http : HttpClient ) { }

  getAllPredectedWeather(){
    return this._http.get('./assets/weatherSummery.json' , { responseType : 'json' });
  }

  getPredictedWeatherDetails(){
    return this._http.get('./assets/predictedWeather.json' , { responseType : 'json' });
  }
}
