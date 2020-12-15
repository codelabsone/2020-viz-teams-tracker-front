import { Injectable } from '@angular/core';
import { Member } from 'src/app/model/member';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private manageApi: string;
  public currentMember: Observable<Member>

  membersUrl = '.././mock-data/members.ts'

  constructor(private http: HttpClient) {
    this.manageApi = `${environment.apiUrl}`
   }

  // getMember(){
  //   return this.http.get(this.membersUrl);
  // }

  addMember(member: Member) {
    return this.http.post(`${this.manageApi}/members`, member)
  }

  getMemberData(): Observable<Member> {
    return this.http.get<Member>(`${this.manageApi}/members`)
  }

  updateMemberData(member: Member): Observable<Member> {
    return this.http.patch<Member>(`${this.manageApi}/members/${member.id}`, member)
  }


}
