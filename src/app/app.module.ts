import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtcListComponent } from './artc-list/artc-list.component';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ArtcListComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NxDropdownModule,
    NxFormfieldModule,
    NxGridModule,
    NxHeadlineModule,
    NxCardModule,
    NxPaginationModule,
    NxSpinnerModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
