import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationGridComponent } from './publication-grid/publication-grid.component';
import { SourcesGridComponent } from './sources-grid/sources-grid.component';
import { AddSourcesComponent } from './add-sources/add-sources.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EditionFormComponent } from './edition-form/edition-form.component';
import { PublicationHomeComponent } from './publication-home/publication-home.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { SourcehometabComponent } from './sourcehometab/sourcehometab.component';
import { HomedataComponent } from './homedata/homedata.component';
import { ChanneldataComponent } from './channeldata/channeldata.component';
import { PublicationSourcesTabsComponent } from './publication-sources-tabs/publication-sources-tabs.component';
import { GraphicalstatsComponent } from './graphicalstats/graphicalstats.component';
import { NumericalstatsComponent } from './numericalstats/numericalstats.component';
import { ScriptGridComponent } from './script-grid/script-grid.component';
import { DraftScriptComponent } from './draft-script/draft-script.component';
import { PopupComponent } from './popup/popup.component';
import { EditionGridComponent } from './edition-grid/edition-grid.component';


const routes: Routes = [{ path: '', redirectTo: '/graphstat', pathMatch: 'full' },
//Siddhu routes component
{
  path: 'addSource',
  component: AddSourcesComponent
},
{
  path: 'addChannel',
  component: AddChannelComponent
},


{
  path: 'sourcesList',
  component: SourcesGridComponent
},


{
  path: 'editionForm',
  component: EditionFormComponent
},
{
  path: 'publicationHome',
  component: PublicationHomeComponent,
  children: [{ path: 'publicationEdit', component: PublicationEditComponent },
  { path: 'edition', component: EditionGridComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '', redirectTo: './publicationEdit', pathMatch: 'full' }
  ]
},
{
  path: 'addPublication',
  component: AddPublicationComponent
},
{ path: 'addSchedule', component: AddScheduleComponent },

//Shubham routes component
{ path: 'graphstat', component: GraphicalstatsComponent },
{ path: 'numstat', component: NumericalstatsComponent },
{
  path: 'publication-source-tab', component: PublicationSourcesTabsComponent, children: [

    {
      path: 'publicationList',
      component: PublicationGridComponent
    },
    { path: 'sources', component: SourcesGridComponent },
    // {path:'',redirectTo:'/publicationList',pathMatch:'full'} 
  ]
},


{
  path: 'publicationList',
  component: PublicationGridComponent
},

{ path: 'sources', component: SourcesGridComponent },
{ path: 'addsource', component: AddSourcesComponent },
{ path: 'addchannel', component: AddChannelComponent },
{ path: 'publication', component: PublicationGridComponent },
{
  path: 'sourcehometab', component: SourcehometabComponent, children: [
    { path: 'homedata', component: HomedataComponent, children: [{ path: 'addsource', component: AddSourcesComponent }] },
    { path: 'channeldata', component: ChanneldataComponent, children: [{ path: 'addchannel', component: AddChannelComponent }] },
    { path: 'publication', component: PublicationGridComponent }
  ]
},

//pranali Routes

{
  path: 'script',
  component: ScriptGridComponent
},
{
  path: 'draftscript',
  component: DraftScriptComponent
},
{
  path: 'popup',
  component: PopupComponent
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//,children:[{path:'script', component:ScriptGridComponent}]