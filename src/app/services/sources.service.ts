import { Injectable } from '@angular/core';
import { SourceData } from '../model/sources-data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomedataComponent } from '../homedata/homedata.component';

@Injectable({
  providedIn: 'root'
})
export class SourcesService extends SourceData {

  constructor(private router: Router) {
    super();
  }

  form = new FormGroup({
    $key: new FormControl(null),
    Sname: new FormControl('', Validators.required),
    Psource: new FormControl('', Validators.required),
  });



  gridData = [
    { Sname: "Classeditori", Psource: "Single", },
    { Sname: "D Media", Psource: "Single" },
    { Sname: "Eco di Bergame", Psource: "Multiple" },
    { Sname: "Cronaca Qui", Psource: "Multiple" },
    { Sname: "Cronaca dell Economia", Psource: "Single" }
  ];

  getGridData(): any {
    return this.gridData;
  }


  saveSource(sources) {
    console.log("Inside save(sources)");

    console.log(sources);

    this.Sname = sources.Sname;
    this.Psource = sources.Psource;
    this.gridData.push({
      Sname: sources.Sname,
      Psource: sources.Psource
    });

    console.log(this.gridData);

    this.router.navigate(['sourcehometab/homedata']);
  }

  populateForm(index, sources) {
    console.log("Inside populateForm()");
    console.log("index:" + index);
    console.log(sources);
    this.form.setValue({
      $key: index,
      Sname: sources.Sname,
      Psource: sources.Psource
    });
    this.router.navigate(['sourcehometab/homedata/addsource']);
  }

  updateSource(sources) {
    console.log("Inside updateSource()");
    console.log(sources);

    this.gridData.splice(sources.$key, 1, sources);

    console.log(this.gridData);

    this.router.navigate(['/publication-source-tab/sources']);

  }


}
