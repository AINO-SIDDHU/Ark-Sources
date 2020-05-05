import { Component, OnInit, Injectable } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { Router } from '@angular/router';
import { ChannelActionDispatcher } from '../action-dispatcher/ChannelActionDispatcher';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-channeldata',
  templateUrl: './channeldata.component.html',
  styleUrls: ['./channeldata.component.scss']
})
export class ChanneldataComponent implements OnInit {

  gridHeader: string = 'Channel';
  gridConfig: any = [];
  channelGridDataPromise;

  channelActionDispatcher = new ChannelActionDispatcher(this);

  gridColumns = [
    { name: 'checkbox', item: '', position: 0 },
    { name: 'channelName', item: 'Channel name', position: 1 },
    { name: 'selectedProtocol', item: 'Protocol', position: 2 },
    {name:'url',item:'Url',position:3},
    {name:'username',item:'Username',position:4},
    {name:'password',item:'Password', position:5}

  ];

  sourceGridConfig = [{
    'addNewUserForm': { enable: true, token: 'add-new-user-form' },
    'enableActionToolbar': { enable: true, token: 'enable-action-toolbar' },
    'enableSearchToolbar': { enable: true, token: 'enable-search-toolbar' },
    'enableSearchPlaceholder': { enable: 'block', token: 'enable-search-placeholder' },
    'enableSearchBar': { enable: 'none', token: 'enable-search-bar' }
  }];

  constructor(private channelService:ChannelService,private router:Router) {
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
    this.channelGridDataPromise = this.getPromiseData();

    console.log(this.channelGridDataPromise);
  }


getPromiseData(): Promise<any> {
        console.log(this.channelService.getGridData());
                let promise = new Promise((resolve, reject) => {
            Promise.all(this.channelService.getGridData()).then( 
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


    onClickAddChannel() {
      console.log("Inside onClickAddChannel");
     this.router.navigate(['addchannel']);

  }

}
