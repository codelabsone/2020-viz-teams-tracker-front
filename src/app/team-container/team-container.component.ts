import { Component, OnInit } from '@angular/core';
import { MemberService } from '.././services/member.service';
import { MEMBERS } from '../mock-data/members';
import { Member } from '../models/member';
import { Team } from '../model/team';
import { TeamService } from '../services/team.service';


@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {

  members = MEMBERS
  constructor(
    private memberService: MemberService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teamService.selectedTeam.subscribe(newTeam => {
      if(newTeam !== null) {
        this.members = newTeam.members;

      }
    })
  }


}
