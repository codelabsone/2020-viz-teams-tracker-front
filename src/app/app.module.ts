import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamContainerComponent } from './team-container/team-container.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AddmembermodalComponent } from './addmembermodal/addmembermodal.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddTeamComponent } from './add-team/add-team.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DeletemodalComponent } from './modals/deletemodal/deletemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent,
    TeamContainerComponent,
    AddmembermodalComponent,
    AddTeamComponent,
    DeletemodalComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatExpansionModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    DragDropModule,
    MatPaginatorModule,
    MatProgressBarModule,

  ],
  providers: [],
  entryComponents:[MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
