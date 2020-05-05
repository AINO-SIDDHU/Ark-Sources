import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationGridComponent } from './publication-grid/publication-grid.component';
import { SourcesGridComponent } from './sources-grid/sources-grid.component';
import { CommonModule, DatePipe } from '@angular/common';
import { EnterpriseGridModule } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { MaterialModuleSet } from '../common/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSourcesComponent } from './add-sources/add-sources.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EditionFormComponent } from './edition-form/edition-form.component';
import { PublicationHomeComponent } from './publication-home/publication-home.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { SourcehometabComponent } from './sourcehometab/sourcehometab.component';
import { HomedataComponent } from './homedata/homedata.component';
import { ChanneldataComponent } from './channeldata/channeldata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphicalstatsComponent } from './graphicalstats/graphicalstats.component';
import { NumericalstatsComponent } from './numericalstats/numericalstats.component';
import { PublicationSourcesTabsComponent } from './publication-sources-tabs/publication-sources-tabs.component';

import { HttpClientModule } from '@angular/common/http';
import { ScriptGridComponent } from './script-grid/script-grid.component';
import { PopupComponent } from './popup/popup.component';
import { DraftScriptComponent } from './draft-script/draft-script.component';
import { EditionGridComponent } from './edition-grid/edition-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicationGridComponent,
    SourcesGridComponent,
    ScriptGridComponent,
    DraftScriptComponent,
    PopupComponent,
    AddSourcesComponent,
    AddChannelComponent,
    AddPublicationComponent,
    ScheduleComponent,
    EditionFormComponent,
    PublicationHomeComponent,
    PublicationEditComponent,
    AddScheduleComponent,
    SourcehometabComponent,
    HomedataComponent,
    ChanneldataComponent,
    NavbarComponent,
    GraphicalstatsComponent,
    NumericalstatsComponent,
    PublicationSourcesTabsComponent,
    EditionGridComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MaterialModuleSet,
    AppRoutingModule,
    EnterpriseGridModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgxMaterialTimepickerModule
  ],
  exports: [PublicationGridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
