import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtcListComponent } from './artc-list/artc-list.component';

const routes: Routes = [
  { path: '', component: ArtcListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
