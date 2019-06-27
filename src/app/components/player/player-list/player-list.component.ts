import { Component, OnInit } from '@angular/core';
import {Player} from 'src/app/class/player';
import {PlayerService} from 'src/app/services/player.service'
import { PlayerCreateComponent } from '../player-create/player-create.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players:Player[];
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(data=>(this.players =data));
  }
  openCreate(){
    //const dialog = this.dialog.open(PlayerCreateComponent,{
    //  width:'700px',
    //  data: {}
    //})
    //dialog.afterClosed().subscribe(result=>{
      //alert(`User chose ${result}`)
    //})
  }

}
