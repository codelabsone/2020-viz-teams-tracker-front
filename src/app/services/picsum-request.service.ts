import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsumRequestService {

  constructor(
    public http: HttpClient
  ) { }

  picsumCall(pageNumber: number) : Observable<any> {
     return this.http.get('https://picsum.photos/v2/list?page=' + pageNumber + '&limit=5')
  }
}
