import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Team } from '../model/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  garbage: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl("")
  });

  constructor(private teamService: TeamService, private dialogRef: MatDialogRef<AddTeamComponent>) { }

  ngOnInit(): void {

  }

  addNewTeam () {
    // console.log(this.garbage)
    // console.log(this.garbage.value)
    // var teamName = (<HTMLInputElement>document.getElementById("newTeamName")).value;
    // var teamDescription = (<HTMLInputElement>document.getElementById("newTeamDescription")).value;
    // const newTeam = new Team(null, teamName, teamDescription)
    this.teamService.addTeam(this.garbage.value).subscribe(data=>{
      console.log(data);
      this.dialogRef.close(data);
    })
  }



}
