import { Injectable } from '@angular/core';
import { ScriptData } from '../model/scriptdata';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScriptService extends ScriptData {

  constructor() {
    super();
  }

  scriptname:string;
  associatedpublication:string;

  gridtData:ScriptData[] = 
  [
      {scriptname:"<a href='/draftscript'>http://shop.quotidianodipugila.it#-Lecce</a>",associatedpublication:"Quotidiano di Pugila"},
      {scriptname:"<a href='/draftscript'>http://shop.limattino.it/edicola-Napoli</a>",associatedpublication:"II Mattino"},
      {scriptname:"<a href='/draftscript'>http://shop.limattino.it/edicola-Benevento</a>",associatedpublication:"II Mattino"},
      // {scriptname:"http://shop.limattino.it/edicola-Salemo",associatedpublication:"II Mattino"},
      // {scriptname:"http://shop.limattino.it/edicola-Avellino",associatedpublication:"II Mattino"},
      // {scriptname:"<a href='/draftscript'>Corriere Romagna - Ed. Ravenna Imola</a>",associatedpublication:"Corriere Romagna"},
      // {scriptname:"<a href='/draftscript'>IIMessaggero-Umbria</a>",associatedpublication:"II Messaggero"},
      // {scriptname:"<a href='/draftscript'>IIMessaggero-Viterbo</a>",associatedpublication:" - "}
  ];
  
  getScriptData() :any{
    return this.gridtData; 
   }
}
