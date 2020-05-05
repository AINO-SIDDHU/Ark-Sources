import { Injectable } from '@angular/core';


import { PublicationData } from '../model/publication-data';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class PublicationService extends PublicationData {
  myFlagForBenchmark = new FormControl();


  constructor(private router: Router, public datepipe: DatePipe) {
    super();
  }
  form = new FormGroup({
    id: new FormControl(null),
    channel: new FormControl('', Validators.required),
    publicationName: new FormControl('', Validators.required),
    publicationType: new FormControl('', Validators.required),
    contentType: new FormControl('', Validators.required),
    subscriptionDate: new FormControl('', Validators.required),
    expiryDate: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),

    benchMark: new FormControl(),
    parrentPath: new FormControl('', Validators.required),
    fileStrategy: new FormControl('', Validators.required),
    regexForPage: new FormControl('', Validators.required),
    regexForEdition: new FormControl('', Validators.required),
  });


  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  gridData: PublicationData[] = [
    { id: 1, channel: "La Gazzetta dello Sport", publicationName: "la Repubblica", publicationType: "Magazine", contentType: "La Gazzetta dello Sport", subscriptionDate: null, expiryDate: null, language: "Italian", category: "Other Magazine ", country: "Italy", region: "-", benchMark: "-", parrentPath: "-", fileStrategy: "-", regexForPage: "---", regexForEdition: "---" },

  ];

  getGridData(): any {
    return this.gridData;
  }

  populateForm(publication) {
    console.log("Inside populateForm()");
    var mark;
    if (this.myFlagForBenchmark.touched === true) {
      mark = publication.benchMark;
    }
    else {
      mark = "-";
    }


    this.id = publication.id;
    this.channel = publication.channel;
    this.publicationName = publication.publicationName;
    this.publicationType = publication.publicationType;
    this.contentType = publication.contentType;
    this.subscriptionDate = publication.subscriptionDate;
    this.expiryDate = publication.expiryDate;
    this.language = publication.language;
    this.category = publication.category;
    this.country = publication.country;
    this.region = publication.region;
    this.benchMark = mark;
    this.parrentPath = publication.parrentPath;
    this.fileStrategy = publication.fileStrategy;
    this.regexForPage = publication.regexForPage;
    this.regexForEdition = publication.regexForEdition;



    this.form.setValue({
      id: publication.id,
      channel: publication.channel,
      publicationName: publication.publicationName,
      publicationType: publication.publicationType,
      contentType: publication.contentType,

      subscriptionDate: publication.subscriptionDate,
      expiryDate: publication.expiryDate,
      language: publication.language,
      category: publication.category,
      country: publication.country,
      region: publication.region,
      benchMark: mark,
      parrentPath: publication.parrentPath,
      fileStrategy: publication.fileStrategy,
      regexForPage: publication.regexForPage,
      regexForEdition: publication.regexForEdition

    });
    this.router.navigate(['sourcehometab/homedata/addsource']);
  }





  onSaveContinue(publication) {

    console.log("INSIDE SAVE AND CONNTINUE");
    console.log(this.datepipe.transform(publication.subscriptionDate, 'dd/MM/yyyy'));
    var mark;
    if (this.myFlagForBenchmark.touched === true) {
      mark = publication.benchMark;
    }
    else {
      mark = "-";
    }


    this.id = publication.id;
    this.channel = publication.channel;
    this.publicationName = publication.publicationName;
    this.publicationType = publication.publicationType;
    this.contentType = publication.contentType;
    this.subscriptionDate = publication.subscriptionDate
    this.expiryDate = publication.expiryDate;
    this.language = publication.language;
    this.category = publication.category;
    this.country = publication.country;
    this.region = publication.region;
    this.benchMark = mark;
    this.parrentPath = publication.parrentPath;
    this.fileStrategy = publication.fileStrategy;
    this.regexForPage = publication.regexForPage;
    this.regexForEdition = publication.regexForEdition;



    this.gridData.push({

      id: publication.id,
      channel: publication.channel,
      publicationName: publication.publicationName,
      publicationType: publication.publicationType,
      contentType: publication.contentType,
      subscriptionDate: this.datepipe.transform(publication.subscriptionDate, 'dd/MM/yyyy'),
      expiryDate: publication.expiryDate,
      language: publication.language,
      category: publication.category,
      country: publication.country,
      region: publication.region,
      benchMark: mark,
      parrentPath: publication.parrentPath,
      fileStrategy: publication.fileStrategy,
      regexForPage: publication.regexForPage,
      regexForEdition: publication.regexForEdition



    });



    console.log("save and continue  publication");
    console.log(typeof (this.subscriptionDate));
    this.router.navigate(['publicationHome/publicationEdit']);
  }




}