import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TEAM } from '../mock-data/teams';
import { Team } from '../model/team';
import { TeamsListComponent } from '../teams-list/teams-list.component';
import { PicsumRequestService } from '../services/picsum-request.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-addmembermodal',
  templateUrl: './addmembermodal.component.html',
  styleUrls: ['./addmembermodal.component.scss']
})
export class AddmembermodalComponent implements OnInit {
  public teams:Team[] = TEAM

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
          private picsumService: PicsumRequestService) { }

  pictures: Object;
  ngOnInit(): void {
    // this.picsumService.picsumCall().subscribe(x => {console.log});
    this.picsumService.picsumCall().subscribe(
      data => {this.pictures = data;
      console.log(this.pictures)
      })
  }

  // selectedTeam(team:Team) {
  //   this.stateService.selectedTeam.next(team);
  // }

  //^ needs to be fixed

  // getPicsum() {
  //   this.picsumService.picsumCall().subscribe(x => {console.log});
  // }

  // getPicsum() {
  //   this.picsumService.picsumCall().subscribe(x => {
  //     this.pictures = x
  //   });
  // }

}
