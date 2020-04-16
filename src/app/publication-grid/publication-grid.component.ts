import { Component, OnInit, AfterViewInit } from '@angular/core';

import { GridData } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { PublicationActionDispatcher } from '../action-dispatcher/PublicationActionDispatcher';


import 'rxjs/add/operator/toPromise';
import { PublicationService } from '../services/publication.service';
@Component({
  selector: 'app-publication-grid',
  templateUrl: './publication-grid.component.html',
  styleUrls: ['./publication-grid.component.scss'],
})
export class PublicationGridComponent implements OnInit, GridData, AfterViewInit {
  gridHeader: string = 'PUBLICATION';
  gridConfig: any = [];
  publicationGridDataPromise;

  publicationActionDispatcher = new PublicationActionDispatcher();

  gridColumns = [
    { name: 'checkbox', item: '', position: 0 },
    { name: 'name', item: 'Name', position: 1 },
    { name: 'type', item: 'Type', position: 2 },
    { name: 'language', item: 'Language', position: 3 },
    { name: 'category', item: 'Category', position: 4 },
     { name: 'country', item: 'Country', position: 5 },
      { name: 'region', item: 'Region', position: 6 },
       { name: 'expiryDate', item: 'Expiry Date', position: 7 }
  ];

  publicationGridConfig = [{
    'addNewUserForm': { enable: true, token: 'add-new-user-form' },
    'enableActionToolbar': { enable: true, token: 'enable-action-toolbar' },
    'enableSearchToolbar': { enable: true, token: 'enable-search-toolbar' },
    'enableSearchPlaceholder': { enable: 'block', token: 'enable-search-placeholder' },
    'enableSearchBar': { enable: 'none', token: 'enable-search-bar' }
  }];

  constructor(private pubService: PublicationService) {
    this.gridConfig.push(this.gridHeader);
    this.gridConfig.push(this.gridColumns);
    this.gridConfig.push(this.publicationGridConfig);

    console.log("INSIDE CONSTRUCTOR");
    // setTimeout(() => {
    //   // this.getFirstPage();
    // }, 1000);

  }
  ngAfterViewInit(): void {
    console.log('After INIT');
 
  }

  ngOnInit(): void {
    console.log("INSIDE NG");
   this.getFirstPage();
  }

  getFirstPage() {
    this.publicationGridDataPromise = this.getPromiseData();

    console.log(this.publicationGridDataPromise);
  }


getPromiseData(): Promise<any> {
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

}
