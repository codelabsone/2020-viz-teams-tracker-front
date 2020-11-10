import { Component, OnInit } from '@angular/core';
import { MemberService } from '.././services/member.service';
import { MEMBERS } from '../mock-data/members';
import { Member } from '../models/member';


@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {

  members = MEMBERS
  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
  }

  showMembers(){

  }

}
