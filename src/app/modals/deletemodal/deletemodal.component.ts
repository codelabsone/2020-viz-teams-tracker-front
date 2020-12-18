import { Component, OnDestroy, Inject } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from 'src/app/services/state.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.scss']
})
export class DeletemodalComponent implements OnDestroy {
  teaminfo: Team[];
  subscription: Subscription;
  id = this.stateService.selectedTeam.value.id;
  constructor(
    private dialogRef: MatDialogRef<DeletemodalComponent>,
    private stateService: StateService,
    private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public data: {name: string}) {
    // this.subscription = this.teamService.onMessage().subscribe(x => {this.data = x});
  }

  onClickDelete() {
    this.teamService.deleteTeam(this.id).subscribe(()=>{
      location.reload();
    });
  }

  ngOnDestroy() {

  }

}
