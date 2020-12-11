import { Component, OnDestroy } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.scss']
})
export class DeletemodalComponent implements OnDestroy {

  data: Object;
  subscription: Subscription;

  constructor(private teamService: TeamService) {
    this.subscription = this.teamService.onMessage().subscribe(x => {this.data = x});
    console.log(this.data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  // onClickDelete() {
  //   this.teamService.deleteTeam(this.identifier)
  // }
}
