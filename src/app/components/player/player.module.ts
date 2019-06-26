import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';


import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from "@angular/material/tabs";
import { PlayerCreateComponent } from './player-create/player-create.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';
@NgModule({
  declarations: [PlayerListComponent, PlayerCreateComponent, RepDialogComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,MatDialogModule,MatButtonModule
  ],
  entryComponents:[RepDialogComponent]
})
export class PlayerModule { }
