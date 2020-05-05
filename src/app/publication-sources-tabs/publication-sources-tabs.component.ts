import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-publication-sources-tabs',
  templateUrl: './publication-sources-tabs.component.html',
  styleUrls: ['./publication-sources-tabs.component.scss']
})
export class PublicationSourcesTabsComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Publications',
        link: './publicationList',
        index: 0
      }, {
        label: 'Sources',
        link: './sources',
        index: 1
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }


}









// routeLinks: any[];
// activeLinkIndex = -1;
// constructor(private router: Router) {
//     this.routeLinks = [
//         {
//             label: 'Publications',
//             link: './publicationList',
//             index: 0
//         }, {
//             label: 'Sources',
//             link: './sources',
//             index: 1
//         }
//     ];
// }
// ngOnInit(): void {
//     this.router.events.subscribe((res) => {
//         this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
//     });
// }

