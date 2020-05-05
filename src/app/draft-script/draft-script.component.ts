import { Component, OnInit } from '@angular/core';
import { ScriptGridComponent } from '../script-grid/script-grid.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { ScriptService } from '../services/script.service';
import { FormGroup, FormControl } from '@angular/forms';

import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-draft-script',
  templateUrl: './draft-script.component.html',
  styleUrls: ['./draft-script.component.scss']
})
export class DraftScriptComponent implements OnInit {

  // buttonDisabled:boolean=true;
  scriptname: string;
  associatedpublication: any;
  btnDisabled = true;

  formDraft: FormGroup;

  constructor(public router: Router, public route: ActivatedRoute, private scriptservice: ScriptService, private scriptcomponent: ScriptGridComponent, public dialog: MatDialog) { }

  ngOnInit() {
    this.formDraft = new FormGroup({
      scriptname: new FormControl(),
      // draft : new FormControl(),
      select: new FormControl(),
      textarea: new FormControl()
    });
  }

  testScript() {
    console.log("enabled");
    this.btnDisabled = !this.btnDisabled;
  }

  saveScript() {
    console.log("inside save script");
    console.log(this.formDraft.value.scriptname);
    let data = { scriptname: this.formDraft.value.scriptname, associatedpublication: "null" };
    this.scriptservice.gridtData.push(data);

    console.log(this.scriptservice.gridtData);
    this.scriptcomponent.getFirstPage();
    this.router.navigate(['/draftscript']);
  }

  popup() {
    this.dialog.open(PopupComponent, {
      width: '350px',
    });
  }
}

//this.route.params.subscribe(params => {
  //      this.data = params['data']
  //     console.log("inside ng");
  //     // console.log(JSON.stringify(data));
  //     console.log(this.data);
  // });

  // closeDialog(){
  //   console.log("inside close dialog");
  //   this.dialogRef.close(true);
  // }


    // this.gettingData = this.route.snapshot.params['formScript.value'];
    // console.log("Inside ngOninit of draft script");
    // console.log(this.gettingData);