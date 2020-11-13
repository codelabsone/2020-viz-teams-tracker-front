import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TEAM } from '../mock-data/teams';
import { Team } from '../model/team';

@Component({
  selector: 'app-addmembermodal',
  templateUrl: './addmembermodal.component.html',
  styleUrls: ['./addmembermodal.component.scss']
})
export class AddmembermodalComponent implements OnInit {
  public teams:Team[] = TEAM
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
