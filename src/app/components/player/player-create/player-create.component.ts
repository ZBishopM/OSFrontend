import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';


@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  emailFormControl: FormControl;

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
  }

  openRepDialong(){
    const dialog = this.dialog.open(RepDialogComponent,{
      width:'250px',
      data: {}
    })
    dialog.afterClosed().subscribe(result=>{
      alert(`User chose ${result}`)
    })

  }

}
