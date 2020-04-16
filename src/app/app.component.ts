import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ark-sources';
  routeLinks: any[];
    activeLinkIndex = -1;
 constructor(private router: Router) {
        this.routeLinks = [
        {
            label: 'Publication',
            link: './publication',
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
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
}
}
