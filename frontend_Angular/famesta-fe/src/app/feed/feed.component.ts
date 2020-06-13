import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { timer } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(public feed_srv: FeedService,public spinner:NgxSpinnerService) { }

  public feeds;
  public notEmptyFeed=true;
  public notscrolly=true;

  public next_offset_value = 0;
  public limit = 25;

  public search_filter = ['shop','decor','travel','bollywood','art','movies','music','fun','joke','comics','tv','style','hot','girl','bike','car','MT15','yamaha']

  ngOnInit(): void {
    this.search_filter = this.shuffleArray(this.search_filter)
    this.feed_srv.getSearchGiphyAPI("search",this.search_filter,this.limit,this.next_offset_value*this.limit,"en").subscribe(
      res =>{
        console.log(res);
        this.feeds = res.data
        this.next_offset_value = this.next_offset_value +1
      },
      err =>
      {
        console.log(err)
      }
    )
  }

  public shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }

  searchFeed(searchFilter){
    this.feeds = null;
    this.spinner.show();
    if(searchFilter === "all"){
      this.search_filter = ['shop','decor','travel','bollywood','art','movies','music','fun','joke','comics','tv','style','hot','girl','bike','car','MT15','yamaha']
    }
    this.search_filter = searchFilter
    this.feed_srv.getSearchGiphyAPI("search",this.search_filter,this.limit,this.next_offset_value*this.limit,"en").subscribe(
      res =>{
        console.log(res);
        this.feeds = res.data
        this.next_offset_value = this.next_offset_value +1
      },
      err =>
      {
        console.log(err)
      }
    )
  }

  onScroll(next_offset_value){
    console.log(this.notscrolly,this.notEmptyFeed)
    if (this.notscrolly && this.notEmptyFeed) {
      this.spinner.show();
      timer(9000).subscribe(x =>{
        this.loadNextFeed(next_offset_value*this.limit);
      })
      
      this.next_offset_value =  this.next_offset_value +1
      // this.spinner.hide();      
    }
  }

  loadNextFeed(nextOffset){
      this.search_filter = this.shuffleArray(this.search_filter)
      this.feed_srv.getSearchGiphyAPI("search",this.search_filter,this.limit,nextOffset,"en").subscribe(
        res =>{
          let new_feeds = res.data;
          console.log(new_feeds)
          if (new_feeds.length === 0){
              this.notEmptyFeed = false;
              this.notscrolly = false;
          }
          this.feeds = this.feeds.concat(new_feeds);
          this.spinner.hide();
        }
      )
  }
  
    
  

}
