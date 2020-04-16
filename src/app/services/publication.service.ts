import { Injectable } from '@angular/core';
import { Data } from '../model/grid-data';

@Injectable({
  providedIn: 'root'
})
export class PublicationService implements Data{

  constructor() {}
  name: string;
  type: string;
  language: string;
  category: string;
  country: string;
  region: string;
  expiryDate: string;

   gridData:Data[] = [
      { name: "la Repubblica", type: "Magazine", language: "Italian", category: "Other Magazine ",country:"Italy",region:"-",expiryDate:"16/4/2020" },
     { name: "La Gazzetta dello Sport", type: "Newspaper", language: "Italian", category: "National Newspaper",country:"Italy",region:"-",expiryDate:"16/4/2020" },
     { name: "La Stampa", type: "Newspaper", language: "Italian", category: "National Newspaper",country:"Italy",region:"-",expiryDate:"16/4/2020" }
    ];
 
  getGridData() :any{
   return this.gridData; 
  }
}