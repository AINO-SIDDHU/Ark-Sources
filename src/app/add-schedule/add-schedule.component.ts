import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { ScheduleData } from '../model/schedule-Data';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatSlideToggle } from '@angular/material';
import { ScheduleComponent } from '../schedule/schedule.component';
import { promise } from 'protractor';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})
export class AddScheduleComponent implements OnInit {
  checkedValue = false;
  tog;
  disabled = false;

  myFlagForSlideToggle: boolean = false;

  constructor(private router: Router, private scheduleService: ScheduleService, public dialogRef: MatDialogRef<AddScheduleComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  days = [];
  time;
  day;

  ngOnInit() {



    this.days = [
      {

        title: 'Sun',
        checked: true,
      },
      {

        title: 'Mon',
        checked: false,
      },
      {

        title: 'Tue',
        checked: true,
      },
      {

        title: 'Wed',
        checked: false,
      },
      {

        title: 'Thu',
        checked: false,
      },
      {

        title: 'Fri',
        checked: false,
      },
      {

        title: 'Sat',
        checked: false,
      },
    ]
  }

  async onSave() {
    var schedule = new ScheduleData();

    var values = Object.values(this.result);
    console.log(values);
    var titles = [];

    for (var i = 0; i < values.length; i++) {
      console.log("-----------------------------------------------------");

      console.log(values[i].title);
      titles.push(values[i].title);
    }



    console.log(this.myFlagForSlideToggle);






    console.log(titles);
    if (values.length == 7) {
      schedule.day = "Everyday";
    } else {
      schedule.day = titles;
    }
    schedule.time = this.time;
    schedule.status = this.getStatus();


    // console.log(this.tog.checkedValue);
    console.log("-------------------------giddata----------------------------");
    this.scheduleService.gridData.push(schedule)

    this.dialogRef.close();



  }


  onCancel() {
    this.dialogRef.close();
  }

  get result() {
    return this.days.filter(day => day.checked);
  }

  public getStatus() {

    if (this.myFlagForSlideToggle === true) {
      return "Enabled";
    }
    else {
      return "Disabled";
    }


  }





}
