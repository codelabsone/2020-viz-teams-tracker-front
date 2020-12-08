import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  status: any;

  addTeam(team: Team) {
    return this.http.post("https://loea-back-test.herokuapp.com/teams", team)
  }

  getTeamData(): Observable<Team[]> {
    return this.http.get<Team[]>("https://loea-back-test.herokuapp.com/teams")
  }

  deleteTeam(id: Number) {
    this.http.delete('https://loea-back-test.herokuapp.com/teams' + id)
    .subscribe(() => this.status = 'Delete successful');
  }


}
