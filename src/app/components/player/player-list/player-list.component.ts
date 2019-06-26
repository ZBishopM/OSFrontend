import { Component, OnInit } from '@angular/core';
import { PlayerCreateComponent } from '../player-create/player-create.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openCreate(){
    const dialog = this.dialog.open(PlayerCreateComponent,{
      width:'700px',
      data: {}
    })
    dialog.afterClosed().subscribe(result=>{
      //alert(`User chose ${result}`)
    })
  }

}
