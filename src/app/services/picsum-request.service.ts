import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsumRequestService {

  pageNumber: number = 1;
  picUrl = 'https://picsum.photos/v2/list?page=' + this.pageNumber + '&limit=5'
  constructor(
    public http: HttpClient
  ) { }

  picsumCall() : Observable<any> {
     return this.http.get(this.picUrl)
  }
}
