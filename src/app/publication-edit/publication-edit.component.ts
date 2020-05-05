import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicationService } from '../services/publication.service';
import { PublicationActionDispatcher } from '../action-dispatcher/PublicationActionDispatcher';
import { PublicationGridComponent } from '../publication-grid/publication-grid.component';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.scss']
})
export class PublicationEditComponent implements OnInit {

  disableSelect = new FormControl(false);

  sub = [];

  pubComp: PublicationGridComponent;
  displayData: any = [];



  constructor(private router: Router, private publicationService: PublicationService, private route: ActivatedRoute) { }

  ngOnInit() {




  }

  subDate = this.publicationService.subscriptionDate;

  expDate = this.publicationService.expiryDate;

  onClickEdit(publication) {


    console.log("---------------==inside edit");

    console.log(this.publicationService.subscriptionDate);
    console.log(this.publicationService.expiryDate);
    this.router.navigate(['/addPublication']);
  }

}
