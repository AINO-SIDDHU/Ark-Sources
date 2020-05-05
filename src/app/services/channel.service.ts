import { Injectable } from '@angular/core';
import { ChannelData } from '../model/channel-data';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChannelService extends ChannelData {

  constructor(private router: Router, private fb: FormBuilder) {
    super();
  }



  form = new FormGroup({
    $key: new FormControl(null),
    channelName: new FormControl('', Validators.required),
    selectedProtocol: new FormControl('Website'),
    url: new FormControl('', Validators.required),
    username: new FormControl({ value: 'username', disabled: true }, Validators.required),
    password: new FormControl({ value: 'password', disabled: true }, Validators.required)
  });

  gridData = [
    { channelName: "Classeditori", selectedProtocol: "Website", url: "-", username: "-", password: "-" },
    { channelName: "Eco di Bergame", selectedProtocol: "Website", url: "-", username: "-", password: "-" },
  ];

  changeState() {
    console.log("Inside changeState()");

    this.form.get('selectedProtocol').valueChanges
      .subscribe(res => {
        console.log(res);
        if ((res === "FTP" || res === "SFTP")) {
          console.log("Inside if()");
          this.form.get('username').enable();
          this.form.get('password').enable();
        }
        else {
          console.log("Inside else()");
          this.form.get('username').disable();
          this.form.get('password').disable();
        }
      });
  }

  getGridData(): any {
    return this.gridData;
  }

  saveChannel(channel) {
    console.log("Inside save(sources)");

    console.log(channel);

    this.gridData.push({
      channelName: channel.channelName,
      selectedProtocol: channel.selectedProtocol,
      url: channel.url,
      username: channel.username,
      password: channel.password
    });

    console.log(this.gridData);
    this.router.navigate(['sourcehometab/channeldata']);

  }
}
