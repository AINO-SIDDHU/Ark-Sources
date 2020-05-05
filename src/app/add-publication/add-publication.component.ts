import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationService } from '../services/publication.service';
import { PublicationData } from '../model/publication-data';
import { MAT_DATE_FORMATS, DateAdapter, NativeDateAdapter } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class AddPublicationComponent implements OnInit {

  disableSelect = new FormControl(false);
  title: string = "Add Publication";



  submitted: boolean;







  constructor(private router: Router, private publicationService: PublicationService) { }
  ngOnInit() {

  }

  // myFlagForBenchmar = this.publicationService.myFlagForBenchmark;

  public onCancel = () => {
    this.router.navigate(['/publication-source-tab/publicationList']);
  }

  onBack() {
    console.log("back");
  }



  onSubmit() {

    console.log("Inside onSumbit()$$$$$$$$$$$$$")




    this.submitted = true;

    if (this.publicationService.form.valid) {
      if (this.publicationService.form.get('id').value == null) {
        console.log("Inside if()");
        this.publicationService.onSaveContinue(this.publicationService.form.value);
      }
      else {
        console.log("Inside else()");
        this.updateSource(this.publicationService.form.value);
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

  // saveSource(sources) {
  //   console.log("Inside save(sources)");

  //   console.log(sources);

  //   this.Sname = sources.Sname;
  //   this.Psource = sources.Psource;
  //   this.gridData.push({
  //     Sname: sources.Sname,
  //     Psource: sources.Psource
  //   });

  //   console.log(this.gridData);

  //   this.router.navigate(['sourcehometab/homedata']);
  // }


  updateSource(publication) {
    console.log("Inside updateSource()");
    console.log(publication);

    this.publicationService.gridData.splice(publication.$key, 1, publication);

    console.log(this.publicationService.gridData);

    this.router.navigate(['/publication-source-tab/sources']);

  }





  benchmarkResult() {

    // if (this.myFlagForBenchmark.touched === true) {
    //   return this.form[this.publicationService.gridData.length - 1].benchMark;
    // }
    // else {
    //   return "-";
    // }

  }
}