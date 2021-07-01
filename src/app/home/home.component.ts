import { Component, OnInit } from '@angular/core';
import { GetBreakingNewsService } from '../get-breaking-news.service';
import { GetPredictedWeatherService } from '../get-predicted-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breakingNews : any = 0;
  predictedWeatehr : any;
  predictedWeatherDetails : any;
  starterCount: number = 0;
  starterHour: number = 0;

  constructor(
    private _GetBreakingNews : GetBreakingNewsService,
    private _AllPredictedWeather: GetPredictedWeatherService
    ) { }

  ngOnInit(): void {
    this._GetBreakingNews.getBreakingNews().subscribe(data => {
      this.breakingNews = data
    });
    this._AllPredictedWeather.getAllPredectedWeather().subscribe(data => {
      this.predictedWeatehr = data;
    })
    this._AllPredictedWeather.getPredictedWeatherDetails().subscribe(data => {
      this.predictedWeatherDetails = data;
    })
  }

  getBreakingNews()
  {
    // this._GetBreakingNews.getBreakingNews().subscribe(data => {
    //   this.breakingNews = data
    // })
  }

  getCielValue(value: any){
    return Math.ceil(value);
  }

  getDate(date: string, dayPlus: number){
    // console.log( "the dayPlus =>" + dayPlus);
    this.starterCount = this.starterCount + dayPlus;
    // console.log( "the starter count => " + this.starterCount);
    const dateValue = new Date(date);
    // return this.starterCount;
    return dateValue.setDate( dateValue.getDate() + this.starterCount );
  }

  getHour(hour: any): any{
    return hour%24;
  }

}
