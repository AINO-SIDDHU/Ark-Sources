import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationGridComponent } from './publication-grid/publication-grid.component';
import { SourcesGridComponent } from './sources-grid/sources-grid.component';


const routes: Routes = [ { path: '', redirectTo: '/publication', pathMatch: 'full' },

  {
    path:'publication',
    component:PublicationGridComponent
  },
  {
    path:'sources',
    component:SourcesGridComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
