import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Team } from '../model/team';
import { Member } from '../model/member';
<<<<<<< HEAD
import { TeamService } from '../services/team.service';
=======
import { TEAM } from '../mock-data/teams';
import { MEMBERS } from 'src/app/mock-data/members'
import { MatDialog } from '@angular/material/dialog';
>>>>>>> main

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
<<<<<<< HEAD
  public teams:Team[];
=======
  public teams:Team[] = TEAM
>>>>>>> main

  constructor(
    public dialog: MatDialog
  ) { }

<<<<<<< HEAD
  constructor(private teamService: TeamService) { }
=======
>>>>>>> main

  ngOnInit(): void {
    this.teams = this.teamService.teams;
  }

  selectTeam(team: Team) {
    this.teamService.selectTeam(team);
  }

  openDialog() {
    const dialogRef = this.dialog.open(Modal);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
})
export class Modal {}
