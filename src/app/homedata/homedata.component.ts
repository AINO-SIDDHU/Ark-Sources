import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AddSourcesComponent } from '../add-sources/add-sources.component';
import { SourcesService } from '../services/sources.service';

@Component({
  selector: 'app-homedata',
  templateUrl: './homedata.component.html',
  styleUrls: ['./homedata.component.scss']
})
export class HomedataComponent implements OnInit {

  constructor(private router:Router, private sourceService:SourcesService) { }
  Name:string;
  Publication:string;

  ngOnInit() {
  }


  Edit(sources)
   {
     console.log("Inside Edit()");
     console.log(sources);
      var index = this.sourceService.gridData.length-1;
      var Inplace = document.getElementsByClassName('inplacecontainer')[0];
      this.sourceService.populateForm(index,sources);
      Inplace.innerHTML='';
   }

}


























// this.router.navigate(['/addsource']);
 //   this.Name ='';
  //   this.Publication='';
  //   // var Inplace = document.getElementsByClassName('inplacecontainer')[0];

  //   var srcvalue = document.getElementById('source');
  //   var pubvalue = document.getElementById('publication'); //apan typescript chya project dynamically create kelata na tasa krycha tasa nhiye dynamicallya nhi karayacha khi tyashivy nhi hoanr te dyanamically ch karava lagnar mi bolto sirarana  are hotay mi kelalaa ADREASS BOOK MADHE WAIT SKYPT CALL LAVTO

  //   var sourcetxtbox = document.createElement('input');
  //   sourcetxtbox.type = "text";

  //   var publicationtxtbox = document.createElement('input');
  //   publicationtxtbox.type = "text";

  //   srcvalue.appendChild(sourcetxtbox);
  //   pubvalue.appendChild(publicationtxtbox);

  //   sourcetxtbox.innerHTML='';
  //   publicationtxtbox.innerHTML='';