import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  //In Feed service we will deal with the Giphy API

  constructor(private http: HttpClient) { }


  private api_key = "wsP6nbV8MuTGp8FWTjvkNYpjzxv27vS9"


  private _base_url = "https://api.giphy.com/v1/gifs/"

  private search_giphy_api

  public getSearchGiphyAPI(api_type,searchfilter,limit,offset,ln): Observable<any>{
    let url = this._base_url+api_type+"?api_key="+this.api_key+"&q="+searchfilter+"&limit="+limit+"&offset="+offset+"&rating=G&lang="+ln
    console.log(url)
    return this.http.get(url)
  }

  public getTrendinggif(api_type,limit,ln): Observable<any>{
    let url = this._base_url+api_type+"?api_key="+this.api_key+"&limit="+limit+"&rating=G"
    console.log(url)
    return this.http.get(url)
  }

  
}
