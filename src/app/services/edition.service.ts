import { Injectable } from '@angular/core';
import { EditionData } from '../model/editionData';


@Injectable({
  providedIn: 'root'
})
export class EditionService extends EditionData {

  constructor() {
    super();
  }


  gridData: EditionData[] = [
    { id: 1, name: "Classeditori", code: "Single" },
    { id: 2, name: "D Media", code: "Single" }

  ];

  getGridData(): any {
    return this.gridData;
  }
}
