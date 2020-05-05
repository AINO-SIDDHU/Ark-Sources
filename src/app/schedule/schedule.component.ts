import { Component, OnInit, Injectable, OnChanges } from '@angular/core';
import { ScheduleDispatcher } from '../action-dispatcher/ScheduleDispatcher';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddScheduleComponent } from '../add-schedule/add-schedule.component';
import { ScheduleService } from '../services/schedule.service';
import { ScheduleData } from '../model/schedule-Data';
import { GridData, GridConfig } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  scheduleDispatcher = new ScheduleDispatcher(this);
  day: string;
  time: string;


  gridData: GridData = this;

  gridConfig = new GridConfig();






  setGridConfiguration() {
    //set the grid Header
    this.gridConfig.setGridHeader = "Schedule";

    //Set the column configuration 
    this.gridConfig.addColumnConfig("checkbox", "", 0);
    this.gridConfig.addColumnConfig("day", " Day", 1);
    this.gridConfig.addColumnConfig("time", "Time", 2);
    this.gridConfig.addColumnConfig("status", "Status", 3);

    //Set the action token and tool configuration
    this.gridConfig.addActionsAndToolConfig("addNewUserForm", true, "add-new-user-form");
    this.gridConfig.addActionsAndToolConfig("enableSearchPlaceholder", true, "toggle-to-searchbar");
    this.gridConfig.addActionsAndToolConfig("enableActionToolbar", true, "enable-action-toolbar");
    this.gridConfig.addActionsAndToolConfig("enableSearchToolBar", true, "enable-search-toolbar");
    this.gridConfig.addActionsAndToolConfig("enableSearchBar", false, "enable-search-bar");
    this.gridConfig.addActionsAndToolConfig("onRowClick", true, "on-row-click");

  }










  constructor(private scheduleService: ScheduleService, private router: Router, public dialog: MatDialog) {

  }

  ngAfterViewInit(): void {
    console.log('After INIT');

  }

  ngOnInit(): void {
    console.log("INSIDE NG");
    this.setGridConfiguration();
  }

  getFirstPage(id: any): Promise<any> {
    console.log("HII-----------------------")
    console.log(this.scheduleService.getGridData());
    let promise = new Promise((resolve, reject) => {
      Promise.all(this.scheduleService.getGridData()).then(
        result => {
          console.log(result + "---------------=====");
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



  openDialog() {
    var schedule = new ScheduleData();
    console.log("inside openDialog");
    let dialogRef = this.dialog.open(AddScheduleComponent, {
      width: '450px',

      data: { day: this.day, time: this.time }

    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.scheduleService.gridData.push(result);

    //   console.log(this.scheduleService.gridData);
    //   this.scheduleDataPromise = this.getPromiseData();


    // });


  }
}
