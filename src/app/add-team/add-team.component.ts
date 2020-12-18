import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    this.teamService.addTeam(this.garbage.value).subscribe(data=>{
      console.log(data);
      data['members']= []
      this.dialogRef.close(data);
    })
  }



}
