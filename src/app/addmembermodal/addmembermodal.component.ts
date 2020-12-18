import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PicsumRequestService } from '../services/picsum-request.service';
import { PageEvent } from '@angular/material/paginator';
import { MemberService } from '../services/member.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-addmembermodal',
  templateUrl: './addmembermodal.component.html',
  styleUrls: ['./addmembermodal.component.scss']
})
export class AddmembermodalComponent implements OnInit {
  selected = false;

  newMemberInfo: FormGroup = new FormGroup({
    first_name: new FormControl("", [Validators.required]),
    last_name: new FormControl("", [Validators.required]),
    title: new FormControl("", [Validators.required]),
    team_id: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
  });

  addNewMember () {
    this.memberService.addMember(this.newMemberInfo.value).subscribe(data=>{
      console.log(data);
      this.dialogRef.close(data);
    })
  }

  constructor(@Inject(MAT_DIALOG_DATA,) public data: any,
          private dialogRef: MatDialogRef<AddmembermodalComponent>,
          private picsumService: PicsumRequestService,
          private memberService: MemberService,
          private teamService: TeamService
          ) { }
  teams: any[];
  pictures: any[];
  selectedPicture: any;
  ngOnInit(): void {
    this.picsumService.picsumCall(1).subscribe(
      data => {this.pictures = data;
      console.log(this.pictures)
      })
    this.teamService.getTeamData().subscribe(
      teamData => { this.teams = teamData;
      }
    )
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

  changePage(event: PageEvent) {
    this.picsumService.picsumCall(event.pageIndex + 1).subscribe(
      data => this.pictures = data
    )
    console.log(event.pageIndex)
  }

  onSelected(image: any) {
    this.selectedPicture = image;
    this.newMemberInfo.get("image").setValue(this.selectedPicture.download_url)
  }


}
