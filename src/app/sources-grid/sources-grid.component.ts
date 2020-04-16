import { Component, OnInit } from '@angular/core';

import { SourcesService } from '../services/sources.service';
// import { SourcesActionDispatcher } from '../action-dispatcher/SourcesActionDispatcher';

@Component({
  selector: 'app-sources-grid',
  templateUrl: './sources-grid.component.html',
  styleUrls: ['./sources-grid.component.scss']
})
export class SourcesGridComponent implements OnInit {
 gridHeader: string = 'Source';
  gridConfig: any = [];
  sourcesGridDataPromise;

  // sourcesActionDispatcher = new SourcesActionDispatcher();

  gridColumns = [
    { name: 'checkbox', item: '', position: 0 },
    { name: 'name', item: 'Source name', position: 1 },
    { name: 'publicationOfsource', item: 'Publication of source', position: 2 },
  ];

  sourceGridConfig = [{
    'addNewUserForm': { enable: true, token: 'add-new-user-form' },
    'enableActionToolbar': { enable: true, token: 'enable-action-toolbar' },
    'enableSearchToolbar': { enable: true, token: 'enable-search-toolbar' },
    'enableSearchPlaceholder': { enable: 'block', token: 'enable-search-placeholder' },
    'enableSearchBar': { enable: 'none', token: 'enable-search-bar' }
  }];

  constructor(private sourceService: SourcesService) {
    this.gridConfig.push(this.gridHeader);
    this.gridConfig.push(this.gridColumns);
    this.gridConfig.push(this.sourceGridConfig);

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
    this.sourcesGridDataPromise = this.getPromiseData();

    console.log(this.sourcesGridDataPromise);
  }


getPromiseData(): Promise<any> {
        console.log(this.sourceService.getGridData());
        let promise = new Promise((resolve, reject) => {
            Promise.all(this.sourceService.getGridData()).then( 
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
