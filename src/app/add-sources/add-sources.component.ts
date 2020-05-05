import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SourcesService } from '../services/sources.service';
import { SourceData } from '../model/sources-data';


@Component({
  selector: 'app-add-sources',
  templateUrl: './add-sources.component.html',
  styleUrls: ['./add-sources.component.scss']
})
export class AddSourcesComponent implements OnInit {


  submitted: boolean;
  formControls = this.sourceService.form.controls;
  // selected;
  // txtboxvalue;




  ngOnInit() {
  }


  constructor(private router: Router, private sourceService: SourcesService) {
  }

  onCancel() {
    console.log("Inside onCancel()");
    this.router.navigate(['/publication-source-tab/sources']);
  }

  onSubmit() {
    console.log("Inside onSumbit()")
    this.submitted = true;

    if (this.sourceService.form.valid) {
      if (this.sourceService.form.get('$key').value == null) {
        console.log("Inside if()");
        this.sourceService.saveSource(this.sourceService.form.value);
      }
      else {
        console.log("Inside else()");
        this.sourceService.updateSource(this.sourceService.form.value);
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


}



  // if(this.sourceService.form.get('$key').value == null)
    // {
    //   this.sourceService.save(this.sourceService.form.value)
    // }
    // else{
    //   console.log("Inside else");
    //   this.sourceService.save(this.sourceService.form.value)
    // }