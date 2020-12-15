import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { MatDialog } from '@angular/material/dialog';
import { AddmembermodalComponent} from '../addmembermodal/addmembermodal.component'
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { StateService } from '../services/state.service';
import { AddTeamComponent } from '../add-team/add-team.component';
import { Member } from '../model/member';
import { PicsumRequestService } from '../services/picsum-request.service';
import { TeamService } from '../services/team.service'


@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit{

  constructor(
    public dialog: MatDialog,
    private stateService: StateService,
    private picsumService: PicsumRequestService,
    private teamService: TeamService,

  ) { }

  teaminfo: Team[];

  ngOnInit(): void {
    this.getAllTeams();
  }



  openAddTeam(){
    const dialogRef = this.dialog.open(AddTeamComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result) {
        this.teaminfo.push(result)
      }
    });
  }

  openDialog(team: Team) {
    const dialogRef = this.dialog.open(AddmembermodalComponent, {
      data: {
        team,
        allTeams: this.teaminfo
      }
    }
      );
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if(result) {
          this.teaminfo.forEach(team =>{
            if(team.id === result.team_id) {
              team.members.push(result);
            }
          })
        }
      });
  }

  getAllTeams() {
    this.teamService.getTeamData().subscribe(x => {this.teaminfo = x})
    console.log("Hello");
  }

  drop(event: CdkDragDrop<Member[]>, teamId: number) {
    const memberToUpdate = event.previousContainer.data[event.previousIndex];
    console.log(memberToUpdate);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.container.data.length >= 12) {
        
      } else {
        console.log("PreviousContainer", event.previousContainer)
      console.log("CurrentContainer", event.container)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        memberToUpdate.team_id = teamId;
      }
    }
  }

  selectedTeam(team:Team) {
    this.stateService.selectedTeam.next(team);
  }

}
