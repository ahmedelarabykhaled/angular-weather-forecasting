import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBreakingNewsService {

  constructor( private _http : HttpClient ) { }

  getBreakingNews(){
    return this._http.get('https://newsapi.org/v2/everything?q=weather&apiKey=6e47e1f372904bd59b8cffa9e5bf11fb&pageSize=5' , { responseType : 'json' });
  }

  getAllNews(){
    return this._http.get('https://newsapi.org/v2/everything?q=weather&apiKey=6e47e1f372904bd59b8cffa9e5bf11fb' , { responseType : 'json' });
  }

}
