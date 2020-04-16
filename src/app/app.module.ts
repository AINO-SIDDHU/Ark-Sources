import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationGridComponent } from './publication-grid/publication-grid.component';
import { SourcesGridComponent } from './sources-grid/sources-grid.component';
import { CommonModule } from '@angular/common';
import { EnterpriseGridModule } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';
import { MaterialModuleSet } from '../common/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    PublicationGridComponent,
    SourcesGridComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModuleSet,
    AppRoutingModule,
    EnterpriseGridModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule
  ],
  exports: [PublicationGridComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap:[AppComponent]
})
export class AppModule { }
