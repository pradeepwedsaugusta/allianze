import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxInputModule } from '@aposin/ng-aquila/input';
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
    ReactiveFormsModule,
    AppRoutingModule,
    NxDropdownModule,
    NxFooterModule,
    NxFormfieldModule,
    NxGridModule,
    NxHeadlineModule,
    NxInputModule,
    NxCardModule,
    NxPaginationModule,
    NxSpinnerModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

/**  Copyright APOSIN 2021 */
