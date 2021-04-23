import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';
import { GetBreakingNewsService } from '../get-breaking-news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  Tempreture : any ;
  Humadity : any ;
  Wind : any;
  LoadCover : any;
  Summery : any;
  Weather : any;

  BreakingNews : any;

  constructor(private _GetWeatherService : GetWeatherService , private _GetBreakingNews : GetBreakingNewsService) {
    // this.Tempreture = _GetWeatherService.getTempreture();
  }

  ngOnInit( ): void {
    this._GetBreakingNews.getAllNews().subscribe(data => {
      this.BreakingNews = data
    })
  }

  getTempreture(): void{
    this._GetWeatherService.getTempreture().subscribe(data => {
      this.Tempreture = data
    })
  }

  getHumadity(): void{
    this._GetWeatherService.getHumadity().subscribe(data => {
      this.Humadity = data
    })
  }

  getWind(): void{
    this._GetWeatherService.getWind().subscribe(data => {
      this.Wind = data
    })
  }

  getLoadCover(): void{
    this._GetWeatherService.getLoadCover().subscribe(data => {
      this.LoadCover = data
    })
  }

  getSummery(): void{
    this._GetWeatherService.getSummery().subscribe(data => {
      this.Summery = data
    })
  }

  getWeather(): void{
    this._GetWeatherService.getWeather().subscribe(data => {
      this.Weather = data
    })
  }

}
