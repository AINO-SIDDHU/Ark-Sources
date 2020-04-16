import { Injectable } from '@angular/core';
import { SourceData } from '../model/sources-data';

@Injectable({
  providedIn: 'root'
})
export class SourcesService implements SourceData{

  constructor() {}
  name: string;
  publicationOfsource: string;
 
   gridData:SourceData[] = [
      { name: "Classeditori",publicationOfsource:"Single"  },
      { name: "D Media",publicationOfsource:"Single" },
      { name: "Eco di Bergame",publicationOfsource: "Multiple" },
      { name: "Cronaca Qui",publicationOfsource:"Multiple"  },
      { name: "Cronaca dell Economia",publicationOfsource:"Single"  }
    ];
 
  getGridData() :any{
   return this.gridData; 
  }
}
