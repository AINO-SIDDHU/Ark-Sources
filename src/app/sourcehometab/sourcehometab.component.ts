import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sourcehometab',
  templateUrl: './sourcehometab.component.html',
  styleUrls: ['./sourcehometab.component.scss']
})
export class SourcehometabComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
constructor(private router: Router) {
      this.navLinks = [
          {
              label: 'Home',
              link: './homedata',
              index: 0
          }, {
              label: 'Channel',
              link: './channeldata',
              index: 1
          }, {
              label: 'Publication',
              link: './publication',
              index: 2
          }
      ];
  }
ngOnInit(): void {
      this.router.events.subscribe((res) => {
          this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      });
  }

}
