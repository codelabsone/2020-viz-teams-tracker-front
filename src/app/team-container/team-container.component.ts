import { Component, OnInit } from '@angular/core';
import { MemberService } from '.././services/member.service';
import { Team } from '../model/team';
import { Member } from '../model/member';
import { StateService } from '../services/state.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTeamModalComponent } from '../edit-team-modal/edit-team-modal.component';


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
    private stateService: StateService,
    public dialog: MatDialog,
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

    checkPic (member) {
      if(member.image) {
        return member.image
      }else {
        return "https://trello-attachments.s3.amazonaws.com/5f96cdcf742fd017660cfbad/5fa9c7ad160efe09f2b836bf/x/7d82bd8a081aadd9d95d0020cec51e98/avatar.png"
      }
    }


}
