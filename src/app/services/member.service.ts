import { Injectable } from '@angular/core';
import { Member } from '.././models/member';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public currentMember: Observable<Member>
  private http: HttpClient
  membersUrl = '.././mock-data/members.ts'

  constructor() { }

  getMember(){
    return this.http.get(this.membersUrl);
  }


}
