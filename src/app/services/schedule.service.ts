import { Injectable } from '@angular/core';
import { ScheduleData } from '../model/schedule-Data';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends ScheduleData {
  constructor() {
    super();
  }

  gridData: ScheduleData[] = [
    { day: "Mon,Sat,Sun", time: "10.30", status: "Enabled" },
    { day: "Mon,Sat,Sun", time: "11.11", status: "Disabled" }
  ];

  getGridData(): any {
    return this.gridData;
  }
  // addData() {
  //   // var schedule = new ScheduleData()
  //   // schedule.day = "sssssssssss";
  //   this.gridData.push({ day: "ssssssssss" });
  //   console.log(this.gridData);
  // }
}
