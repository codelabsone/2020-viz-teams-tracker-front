import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { TEAM } from '../mock-data/teams';
import { MatDialog } from '@angular/material/dialog';
import { AddmembermodalComponent} from '../addmembermodal/addmembermodal.component'
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { StateService } from '../services/state.service';
import { AddTeamComponent } from '../add-team/add-team.component'
import { Member } from '../model/member';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  public teams:Team[] = TEAM

  constructor(
    public dialog: MatDialog,
    private stateService: StateService,
  ) { }


  ngOnInit(): void {
  }

  openAddTeam(){
    const dialogRef = this.dialog.open(AddTeamComponent)
  }

  openDialog(team: Team) {
    const dialogRef = this.dialog.open(AddmembermodalComponent, {
      data: {
        team,
        allTeams: this.teams
      }
    }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  drop(event: CdkDragDrop<Member[]>, teamId: number, teamName: string) {

    if (event.previousContainer === event.container) {
      console.log("PreviousContainer", event.previousContainer)
      console.log("CurrentContainer", event.container)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("PreviousContainer", event.previousContainer)
      console.log("CurrentContainer", event.container)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.updateMember(event.previousContainer.data[event.previousIndex], teamName, teamId)
  }

  selectedTeam(team:Team) {
    this.stateService.selectedTeam.next(team);
  }

  updateMember(member: Member, teamName: string, teamId: number) {
    let createdMember = new Member(7, member.first_name, member.last_name, teamName, member.image, member.title, teamId)
    console.log(createdMember)
  }

}
