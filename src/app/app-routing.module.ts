import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'player',
    loadChildren:'./components/player/player.module#PlayerModule'
},
{
    path: 'team',
    loadChildren:'./components/team/team.module#TeamModule'
},
{
    path: 'tournament',
    loadChildren:'./components/tournament/tournament.module#TournamentModule'
},
{
    path: 'statistics',
    loadChildren:'./components/statistics/statistics.module#StatisticsModule'
},
{
    path: 'match',
    loadChildren:'./components/match/match.module#MatchModule'
},
// {
//     path:'',
//     redirectTo: '',
//     pathMatch: 'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }