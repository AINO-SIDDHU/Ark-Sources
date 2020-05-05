import { Component, OnInit, Injectable } from '@angular/core';

import { SourcesService } from '../services/sources.service';
import { SourcesActionDispatcher } from '../action-dispatcher/SourcesActionDispatcher';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-sources-grid',
  templateUrl: './sources-grid.component.html',
  styleUrls: ['./sources-grid.component.scss']
})
export class SourcesGridComponent implements OnInit {
  
  gridHeader: string = 'Source';
  gridConfig: any = [];
  sourcesGridDataPromise;

  sourcesActionDispatcher = new SourcesActionDispatcher(this);

  gridColumns = [
    { name: 'checkbox', item: '', position: 0 },
    { name: 'Sname', item: 'Source name', position: 1 },
    { name: 'Psource', item: 'Publication of source', position: 2 },
  ];

  sourceGridConfig = [{
    'addNewUserForm': { enable: true, token: 'add-new-user-form' },
    'enableActionToolbar': { enable: true, token: 'enable-action-toolbar' },
    'enableSearchToolbar': { enable: true, token: 'enable-search-toolbar' },
    'enableSearchPlaceholder': { enable: 'block', token: 'enable-search-placeholder' },
    'enableSearchBar': { enable: 'none', token: 'enable-search-bar' }
  }];

  constructor(private sourceService: SourcesService,private router:Router) {
    this.gridConfig.push(this.gridHeader);
    this.gridConfig.push(this.gridColumns);
    this.gridConfig.push(this.sourceGridConfig);
  }
  ngAfterViewInit(): void {
    console.log('After INIT');
 
  }

  ngOnInit(): void {
    console.log("INSIDE NG");
   this.getFirstPage();
  }

  getFirstPage() {
    console.log("inside getFirstPage()");
    this.sourcesGridDataPromise = this.getPromiseData();
    console.log("--------------------------------------");
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
    onClickAddSource() {
      console.log("Inside onClickAddSource()");
      this.sourceService.form.reset();
      this.router.navigate(['addsource']);

  }

}

