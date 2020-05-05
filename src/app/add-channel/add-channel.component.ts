import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelService } from '../services/channel.service';
import { ChannelData } from '../model/channel-data';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss']
})
export class AddChannelComponent implements OnInit {


  submitted: boolean;
  formControls = this.channelService.form.controls; 

  protocolValue: any[] = [
    { value: 'col-1', viewValue: 'Website' },
    { value: 'col-2', viewValue: 'FTP' },
    { value: 'col-3', viewValue: 'SFTP' }
  ];
  selectedProtocol='';

  constructor(private router:Router,private channelService:ChannelService) { }

  ngOnInit() {
  }

  onCancel(){
    console.log("Inside onCancel()");
    this.router.navigate(['sourcehometab/channeldata']);
  }
  
  onSubmit()
{
  console.log("Inside onSumbit()")
  this.submitted = true;
  
  if(this.channelService.form.valid)
  {
     this.channelService.saveChannel(this.channelService.form.value);   
 
  }

}


}
