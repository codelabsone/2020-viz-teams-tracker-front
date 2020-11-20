import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Member } from '../model/member';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  selectedTeam: BehaviorSubject<Team> = new BehaviorSubject<Team>(undefined);
  selectedMember: BehaviorSubject<Member> = new BehaviorSubject<Member>(undefined);

  constructor() { }
}
