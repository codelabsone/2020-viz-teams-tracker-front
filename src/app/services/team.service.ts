import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams = [
    new Team('Apples', ''),
    new Team('Grape', ''),
    new Team('Carrot', ''),
    new Team('Orange', ''),
    new Team('Banananana', ''),
  ]

  selectedTeam: BehaviorSubject<Team> = new BehaviorSubject(null);

  selectTeam(team: Team){
    this.selectedTeam.next(team);
  }

}
