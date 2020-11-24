import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsumRequestService {

  picUrl = 'https://picsum.photos/v2/list?limit=100'
  constructor(
    public http: HttpClient
  ) { }

  picsumCall() : Observable<any> {
     return this.http.get(this.picUrl)
  }
}
