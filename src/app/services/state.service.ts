import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  selectedTeam: BehaviorSubject<Team> = new BehaviorSubject<Team>(undefined);

  constructor() { }
}
