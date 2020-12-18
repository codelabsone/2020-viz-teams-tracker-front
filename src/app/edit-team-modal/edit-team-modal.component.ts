import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-edit-team-modal',
  templateUrl: './edit-team-modal.component.html',
  styleUrls: ['./edit-team-modal.component.scss']
})
export class EditTeamModalComponent implements OnInit {

  constructor(
    private teamService: TeamService
  ) { }

  teams: any[];

  ngOnInit(): void {
    this.teamService.getTeamData().subscribe(
      teamData => { this.teams = teamData;
      }
    )
  }

}
