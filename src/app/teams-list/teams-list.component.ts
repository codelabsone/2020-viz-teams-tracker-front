import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Team } from '../model/team';
import { Member } from '../model/member';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  public teams:Team[];


  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teams = this.teamService.teams;
  }

  selectTeam(team: Team) {
    this.teamService.selectTeam(team);
  }

}
