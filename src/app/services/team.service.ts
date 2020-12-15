import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {
   }

  private subject = new Subject<any>();

  addTeam(team: Team) {
    return this.http.post("https://loea-back-test.herokuapp.com/teams", team)
  }

  getTeamData(): Observable<Team[]> {
    return this.http.get<Team[]>("https://loea-back-test.herokuapp.com/teams")
  }

  sendMessage(message: number) {
    this.subject.next(message);
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }


  deleteTeam(id) {
    this.http.delete("https://loea-back-test.herokuapp.com/teams/" + id)
  }


}
