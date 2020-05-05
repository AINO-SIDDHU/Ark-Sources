import { Component, OnInit, AfterViewInit, Injectable } from '@angular/core';

import { GridData, GridConfig } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { PublicationActionDispatcher } from '../action-dispatcher/PublicationActionDispatcher';


import 'rxjs/add/operator/toPromise';
import { PublicationService } from '../services/publication.service';
import { Router } from '@angular/router';
import { PublicationEditComponent } from '../publication-edit/publication-edit.component';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-publication-grid',
  templateUrl: './publication-grid.component.html',
  styleUrls: ['./publication-grid.component.scss'],
})
export class PublicationGridComponent implements OnInit, GridData, AfterViewInit {





  gridData: GridData = this;

  gridConfig = new GridConfig();


  publicationActionDispatcher = new PublicationActionDispatcher(this);



  setGridConfiguration() {
    //set the grid Header
    this.gridConfig.setGridHeader = "Publication";

    //Set the column configuration 
    this.gridConfig.addColumnConfig("checkbox", "", 0);
    this.gridConfig.addColumnConfig("channel", "Channel", 1);
    this.gridConfig.addColumnConfig("publicationName", "Publication Name", 2);
    this.gridConfig.addColumnConfig("publicationType", "Publication Type", 3);
    this.gridConfig.addColumnConfig("contentType", "Content Type", 4);
    this.gridConfig.addColumnConfig("subscriptionDate", "Subscription Date", 5);
    this.gridConfig.addColumnConfig("expiryDate", "Expiry Date", 6);
    this.gridConfig.addColumnConfig("language", "Language", 7);
    this.gridConfig.addColumnConfig("category", "Category", 8);
    this.gridConfig.addColumnConfig("country", "Country", 9);
    this.gridConfig.addColumnConfig("region", "Region", 10);

    //Set the action token and tool configuration
    this.gridConfig.addActionsAndToolConfig("addNewUserForm", true, "add-new-user-form");
    this.gridConfig.addActionsAndToolConfig("enableSearchPlaceholder", true, "toggle-to-searchbar");
    this.gridConfig.addActionsAndToolConfig("enableActionToolbar", true, "enable-action-toolbar");
    this.gridConfig.addActionsAndToolConfig("enableSearchToolBar", true, "enable-search-toolbar");
    this.gridConfig.addActionsAndToolConfig("enableSearchBar", false, "enable-search-bar");
    this.gridConfig.addActionsAndToolConfig("onRowClick", true, "on-row-click");

  }







  constructor(private pubService: PublicationService, private router: Router, public editComp: PublicationEditComponent) {


  }
  getFirstPage(id: any): Promise<any> {
    console.log(this.pubService.getGridData());
    let promise = new Promise((resolve, reject) => {
      Promise.all(this.pubService.getGridData()).then(
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
  ngAfterViewInit(): void {
    console.log('After INIT');

  }

  ngOnInit(): void {
    console.log("INSIDE NG=================================================================");

    // this.getFirstPage();
    this.setGridConfiguration();
  }


  onClickAdd() {
    this.pubService.form.reset();
    this.router.navigate(['addPublication']);

  }


  onClickRow(value) {


    console.log(value);
    this.pubService.populateForm(value);
    this.router.navigate(['publicationHome/publicationEdit']);

  }
}
