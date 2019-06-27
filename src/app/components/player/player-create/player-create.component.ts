import { Component, OnInit } from '@angular/core';
import {PlayerService} from 'src/app/services/player.service';
import {TeamService} from 'src/app/services/team.service';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { Player } from 'src/app/class/player';
import { Team } from 'src/app/class/team';


@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  player:Player = new Player();
  teams:Team[];
  emailFormControl: FormControl;
  answermsg = false;

  team:number;
  teamProd:Team=new Team();
  constructor(private playerService:PlayerService,private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(data=>(this.teams=data));
  }

  addPlayer(){
    this.teamProd.id=this.team;
    this.player.teamId=this.teamProd.id;

    this.playerService.addPlayer(this.player).subscribe(data=>{this.answermsg=true;})
  }

}
