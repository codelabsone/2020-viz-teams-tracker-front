import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  addNewTeam () {
    var teamName = (<HTMLInputElement>document.getElementById("newTeamName")).value = "";
    var teamDescription = (<HTMLInputElement>document.getElementById("newTeamDescription")).value = "";
    const newTeam = new Team(null, teamName, teamDescription)
    this.teamService.addTeam(newTeam).subscribe(data=>{
      console.log(data);
    })
  }
}
