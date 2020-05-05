import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EditionData } from '../model/editionData';
import { EditionService } from '../services/edition.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edition-form',
  templateUrl: './edition-form.component.html',
  styleUrls: ['./edition-form.component.scss']
})
export class EditionFormComponent implements OnInit {

  submitted: boolean;
  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required)
  });


  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private editionService: EditionService,
    public dialogRef: MatDialogRef<EditionFormComponent>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSaveContinue(edition) {
    this.editionService.gridData.push({
      id: edition.id,
      name: edition.name,
      code: edition.code
    }
    );
  }

  onSubmit() {




    this.submitted = true;

    if (this.form.valid) {
      if (this.form.get('$key').value == null) {
        console.log("Inside if()");
        this.onSaveContinue(this.form.value);
        this.dialogRef.close();
      }
      else {
        console.log("Inside else()");
        // this.updateSource(this.form.value);
      }


      // this.submitted = false;    
      // this.sourceService.form.reset();
      // // this is to be done for proper reset operation
      // this.sourceService.form.setValue({
      //   $key: null,
      //   Sname: '',
      //   Psource: '',
      // });

    }


  }






  onCancel() {
    this.dialogRef.close();
  }

}
