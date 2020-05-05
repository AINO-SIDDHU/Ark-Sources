import { Component, OnInit, Injectable, Inject } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { ScriptService } from '../services/script.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ScriptDispatcher } from '../action-dispatcher/scriptDispatcher';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

interface DialogData {
  scripturl: string;
}

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-script-grid',
  templateUrl: './script-grid.component.html',
  styleUrls: ['./script-grid.component.scss']
})
export class ScriptGridComponent implements OnInit {
  goToDraftScript() {
    this.router.navigate(['/draftscript']);
  }

  scriptname: string;
  associatedpublication: string;

  scriptDispatcher = new ScriptDispatcher(this);
  gridHeader: string = "SCRIPT";
  gridConfig: any = [];
  scriptGridDataPromise: any;
  scriptData = [];

  gridColumns = [
    { name: 'checkbox', item: '', position: 0 },
    { name: 'scriptname', item: 'Script Name', position: 1 },
    { name: 'associatedpublication', item: 'Associated Publication', position: 2 }
  ];

  scriptGridConfig = [{
    'addNewUserForm': { enable: true, token: 'add-new-user-form' },
    'enableActionToolbar': { enable: true, token: 'enable-action-toolbar' },
    'enableSearchToolbar': { enable: true, token: 'enable-search-toolbar' },
    'enableSearchPlaceholder': { enable: 'block', token: 'enable-search-placeholder' },
    'enableSearchBar': { enable: 'none', token: 'enable-search-bar' }
  }];

  constructor(private _scriptService: ScriptService, private router: Router, public dialog: MatDialog) {
    //DialogData
    this.gridConfig.push(this.gridHeader);
    this.gridConfig.push(this.gridColumns);
    this.gridConfig.push(this.scriptGridConfig);
    console.log("inside constructor");
  }

  ngOnInit() {
    console.log("in NgOnInit");
    this.getFirstPage();
  }

  getFirstPage() {
    console.log("in getFirstPage");
    this.scriptGridDataPromise = this.getPromiseData();
    console.log("-----------------------------------------");
    console.log(this.scriptGridDataPromise);
  }

  getPromiseData(): Promise<any> {
    console.log("inside promise");
    console.log(this._scriptService.getScriptData());
    let promise = new Promise((resolve, reject) => {
      Promise.all(this._scriptService.getScriptData())
        .then(
          result => {
            console.log(result);
            resolve(result);
          },
          error => {
            console.log(error);
            reject(error);
          }
        );
    });
    return promise;
  }
}

  // openDialog() {
  //   console.log("inside openDialog");
  //   this.dialog.open(PopupComponent, {
  //     width: '350px',
  //   });
// }

    // this.dialogRef.afterClosed().subscribe(result => {
    //   this.scriptname = result;
    //   this.associatedpublication=result;
    // });


// ,public matdialog: MatDialog,public dialogRef: MatDialogRef<ScriptGridComponent>,
// @Inject(MAT_DIALOG_DATA) public data: DialogData