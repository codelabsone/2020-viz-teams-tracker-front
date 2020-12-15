import { Component, OnDestroy, Inject } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Subscription } from 'rxjs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.scss']
})
export class DeletemodalComponent implements OnDestroy {

  subscription: Subscription;

  constructor(private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public data: {name: string}) {
    // this.subscription = this.teamService.onMessage().subscribe(x => {this.data = x});
  }

  onClickDelete() {
    this.teamService.deleteTeam(this.data);
  }

  ngOnDestroy() {

  }



}
