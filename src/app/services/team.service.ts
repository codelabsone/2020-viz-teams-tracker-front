import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  addTeam(team: Team) {
    return this.http.post("http://localhost:3000/teams", team)
  }
}
