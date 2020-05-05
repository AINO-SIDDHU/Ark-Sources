import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  popupForm : FormGroup;

  constructor(public router:Router,public dialog:MatDialog,public dialogRef:MatDialogRef<PopupComponent>) { }

  ngOnInit() {
    this.popupForm = new FormGroup({
      select1 : new FormControl(),
      select2 : new FormControl()
    });
  }

  closeDialog(){
    console.log("inside close dialog");
    this.dialogRef.close(true);
  }

}
