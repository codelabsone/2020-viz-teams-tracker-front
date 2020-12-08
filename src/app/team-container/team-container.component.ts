import { Component, OnInit } from '@angular/core';
import { MemberService } from '.././services/member.service';
import { MEMBERS } from '../mock-data/members';
import { TEAM } from '../mock-data/teams';
import { Team } from '../model/team';
import { Member } from '../model/member';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {
  public team:Team;
  memberView: boolean = false;
  selectedMember: Member;
  constructor(
    private memberService: MemberService,
    private stateService: StateService
  ) { }
    ngOnInit() {
      this.stateService.selectedTeam.subscribe(x => {
        this.team = x;
      })
    }

    showMemberInfo(member: Member) {
      this.stateService.selectedMember.next(member);
      this.stateService.selectedMember.subscribe(x => {
        this.selectedMember = x;
      })
      this.memberView = true;
    }

    getSelectedMemberName() {
      if(this.selectedMember){
        return this.selectedMember.first_name + " " + this.selectedMember.last_name;
        console.log("Hello World");
      }
      return "";
    }

    getSelectedTeamName() {
      if(this.team){
        return this.team.name;
      }
      return "";
    }


    clearMemberInfo() {
      this.memberView = false;
    }
}
