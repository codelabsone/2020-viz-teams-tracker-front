import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TEAM } from '../mock-data/teams';
import { Team } from '../model/team';
import { TeamsListComponent } from '../teams-list/teams-list.component';
import { PicsumRequestService } from '../services/picsum-request.service';
import { StateService } from '../services/state.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-addmembermodal',
  templateUrl: './addmembermodal.component.html',
  styleUrls: ['./addmembermodal.component.scss']
})
export class AddmembermodalComponent implements OnInit {
  public teams:Team[] = TEAM;
  selected = false;
  // clicked = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
          private picsumService: PicsumRequestService) { }

  pictures: any[];
  selectedPicture: any;
  ngOnInit(): void {
    // this.picsumService.picsumCall().subscribe(x => {console.log});
    this.picsumService.picsumCall(1).subscribe(
      data => {this.pictures = data;
      console.log(this.pictures)
      })
  }

  length = 100;
  pageSize = 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  // nextPage() {
  //   this.picsumService.pageNumber = this.picsumService.pageNumber + 1;
  //   this.picsumService.picsumCall().subscribe(
  //     data => {this.pictures = data;
  //   })
  // }

  changePage(event: PageEvent) {
    this.picsumService.picsumCall(event.pageIndex + 1).subscribe(
      data => this.pictures = data
    )
    console.log(event.pageIndex)
  }

  onSelected(image: any) {
    this.selectedPicture = image;

  }
}
