import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Team } from '../model/team';
import { Member } from '../model/member';
import { TEAM } from '../mock-data/teams';
import { MEMBERS } from 'src/app/mock-data/members'
import { MatDialog } from '@angular/material/dialog';
import { AddmembermodalComponent} from '../addmembermodal/addmembermodal.component'

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  public teams:Team[] = TEAM

  constructor(
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
  }

  openDialog(team: Team) {
    const dialogRef = this.dialog.open(AddmembermodalComponent, {
      data: {
        team,
        allTeams: this.teams
      }
    }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

// @Component({
//   selector: 'addmembermodal',
//   templateUrl: 'addmembermodal.html',
//   styleUrls: ['./addmembermodal.scss']
// })
// export class Modal {}
