import { Component, OnInit } from '@angular/core';
import { EditionFormComponent } from '../edition-form/edition-form.component';
import { EditionService } from '../services/edition.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddEditionDispatcher } from '../action-dispatcher/AddEditionDispatcher';
import { GridData, GridConfig } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';

@Component({
  selector: 'app-edition-grid',
  templateUrl: './edition-grid.component.html',
  styleUrls: ['./edition-grid.component.scss']
})
export class EditionGridComponent implements OnInit {

  publicationGridDataPromise;

  addEditionDispatcher = new AddEditionDispatcher(this);

  gridData: GridData = this;

  gridConfig = new GridConfig();






  setGridConfiguration() {
    //set the grid Header
    this.gridConfig.setGridHeader = "Edition";

    //Set the column configuration 
    this.gridConfig.addColumnConfig("checkbox", "", 0);
    this.gridConfig.addColumnConfig("name", " Name", 1);
    this.gridConfig.addColumnConfig("code", "Code", 2);

    //Set the action token and tool configuration
    this.gridConfig.addActionsAndToolConfig("addNewUserForm", true, "add-new-user-form");
    this.gridConfig.addActionsAndToolConfig("enableSearchPlaceholder", true, "toggle-to-searchbar");
    this.gridConfig.addActionsAndToolConfig("enableActionToolbar", true, "enable-action-toolbar");
    this.gridConfig.addActionsAndToolConfig("enableSearchToolBar", true, "enable-search-toolbar");
    this.gridConfig.addActionsAndToolConfig("enableSearchBar", false, "enable-search-bar");
    this.gridConfig.addActionsAndToolConfig("onRowClick", true, "on-row-click");

  }


  constructor(private editionService: EditionService, private router: Router, public dialog: MatDialog) {


  }
  ngAfterViewInit(): void {
    console.log('After INIT');

  }

  ngOnInit(): void {
    console.log("INSIDE NG");
    this.setGridConfiguration();
  }

  getFirstPage(id: any): Promise<any> {
    console.log(this.editionService.getGridData());
    let promise = new Promise((resolve, reject) => {
      Promise.all(this.editionService.getGridData()).then(
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


  onCancel() {
    console.log("cancel");
  }


  onBack() {
    console.log("back");
  }

  openDialog(): void {
    console.log("inside openDialog");
    this.dialog.open(EditionFormComponent, {
      width: '350px',

    });

    // dialogRef.afterClosed().subscribe(result => {

    // });
  }

  onSaveContinue() {
    console.log("save and continue");
    this.router.navigate(['schedule']);
  }

}