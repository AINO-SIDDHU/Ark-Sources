import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication-home',
  templateUrl: './publication-home.component.html',
  styleUrls: ['./publication-home.component.scss']
})
export class PublicationHomeComponent implements OnInit {
  disableSelect = new FormControl(false);

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: './publicationEdit',
        index: 0
      }, {
        label: 'Edition',
        link: './edition',
        index: 1
      },

      {
        label: 'Schedule',
        link: './schedule',
        index: 2
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
