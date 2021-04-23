import { Component, OnInit } from '@angular/core';
import { GetBreakingNewsService } from '../get-breaking-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breakingNews : any = 0;

  constructor(private _GetBreakingNews : GetBreakingNewsService) { }

  ngOnInit(): void {
    this._GetBreakingNews.getBreakingNews().subscribe(data => {
      this.breakingNews = data
    })
  }

  getBreakingNews()
  {
    // this._GetBreakingNews.getBreakingNews().subscribe(data => {
    //   this.breakingNews = data
    // })
  }

}
