import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerCreateComponent } from './player-create/player-create.component';
const routes: Routes = [
  {
    path:'',
    component: PlayerListComponent
  },
  {
    path:'new',
    component:PlayerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
