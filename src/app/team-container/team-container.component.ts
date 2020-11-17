import { Component, OnInit } from '@angular/core';
import { MemberService } from '.././services/member.service';
import { MEMBERS } from '../mock-data/members';
import { TEAM } from '../mock-data/teams';
import { Team } from '../model/team';
import { Member } from '../models/member';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {
  public team:Team;
  constructor(
    private memberService: MemberService,
    private stateService: StateService
  ) { }
    ngOnInit() {
      this.stateService.selectedTeam.subscribe(x => {
        this.team = x;
      })
    }
}
