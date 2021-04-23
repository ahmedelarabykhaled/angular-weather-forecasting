import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBreakingNewsService {

  constructor( private _http : HttpClient ) { }

  getBreakingNews(){
    return this._http.get('./assets/everything.json' , { responseType : 'json' });
  }

  getAllNews(){
    return this._http.get('./assets/allweathernews.json' , { responseType : 'json' });
  }

}
