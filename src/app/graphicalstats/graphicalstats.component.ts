import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
//var CanvasJS = require('./canvasjs.min');
interface PublicationsInterface{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-graphicalstats',
  templateUrl: './graphicalstats.component.html',
  styleUrls: ['./graphicalstats.component.scss']
})
export class GraphicalstatsComponent implements OnInit {

  today: number = Date.now();

  constructor() {
    setInterval(() => {this.today = Date.now()}, 1);
   }

  ngOnInit(): void { 
 
    var chart1 = new CanvasJS.Chart("chartContainer1", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      axisY: {
        title: "No of pages"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Month",
        dataPoints: [      
          { y: 50000, label: "Jan", color:'blue' },
          { y: 30000,  label: "Feb",color:'blue' },
          { y: 89000,  label: "Mar",color:'blue' },
          { y: 45000,  label: "Apr",color:'blue' }
        ]
      }]
    });

    
    var chart2 = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      axisY: {
        title: "No of articles"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Month",
        dataPoints: [      
          { y: 12000, label: "Jan" ,color:'blue'},
          { y: 21000,  label: "Feb",color:'blue' },
          { y: 80000,  label: "Mar",color:'blue' },
          { y: 45000,  label: "Apr",color:'blue' }
        ]
      }]
    });

    var chart3 = new CanvasJS.Chart("chartContainer3", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      axisY: {
        title: "No of pages"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Days",
        dataPoints: [      
          { y: 8500, label: "Fri",color:'blue' },
          { y: 7000,  label: "Sat",color:'blue' },
          { y: 7800,  label: "Sun",color:'blue' },
          { y: 2500,  label: "Mon",color:'blue' },
          { y: 10000, label: "Tue",color:'blue'},
          { y: 9500, label: "Wed",color:'blue'},
          { y: 6500, label: "Thu",color:'blue'}

        ]
      }]
    });

    var chart4 = new CanvasJS.Chart("chartContainer4", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      axisY: {
        title: "No of articles"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Days",
        dataPoints: [      
          { y: 15000, label: "Fri",color:'blue' },
          { y: 10000,  label: "Sat",color:'blue' },
          { y: 8000,  label: "Sun",color:'blue' },
          { y: 25000,  label: "Mon",color:'blue' },
          { y: 18000, label: "Tue",color:'blue'},
          { y: 9500, label: "Wed",color:'blue'},
          { y: 17000, label: "Thu",color:'blue'}

        ]
      }]
    });
    chart1.render();
    chart2.render();
    chart3.render();
    chart4.render();
    }

    publicationData:PublicationsInterface[] =[
      {value:'Avvenire-0',viewValue:'Avvenire'},
      {value:'Il Gazzettino-1',viewValue:'Il Gazzettino'},
      {value:'Il Tirreno-2',viewValue:'Il Tirreno'},
      {value:'Al Volante-3',viewValue:'Al Volante'},
      {value:'Blow Up-4',viewValue:'Blow Up'}
    ];
  
}

  
