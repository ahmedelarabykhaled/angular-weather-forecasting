import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private Http : HttpClient) { }

  getTempreture()
  {
    return this.Http.get('http://127.0.0.1:8000/predictTempreture' , { responseType : 'json' });
    // return this.Http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getHumadity()
  {
    return this.Http.get('http://127.0.0.1:8000/predictHumidity' , { responseType : 'text' });
  }
  
  getLoadCover()
  {
    return this.Http.get('http://127.0.0.1:8000/predictLoadCover' , { responseType : 'text' });
  }
  
  getWind()
  {
    return this.Http.get('http://127.0.0.1:8000/predictWind' , { responseType : 'text' });
  }
  
  getSummery()
  {
    return this.Http.get('http://127.0.0.1:8000/predictSummery' , { responseType : 'text' });
  }

  
  getWeather()
  {
    return this.Http.get('http://127.0.0.1:8000/predictWeather' , { responseType : 'text' });
  }
}
