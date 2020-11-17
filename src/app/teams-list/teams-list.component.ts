import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { TEAM } from '../mock-data/teams';
import { MatDialog } from '@angular/material/dialog';
import { AddmembermodalComponent} from '../addmembermodal/addmembermodal.component'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
    public dialog: MatDialog
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

  drop(event: CdkDragDrop<Member[]>) {
    console.log('DATA', event.container.data)
    console.log('PreviousIndex', event.previousIndex)
    console.log('CurrentIndex', event.currentIndex)
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

}
