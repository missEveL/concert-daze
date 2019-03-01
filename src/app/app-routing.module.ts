import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertSpectsComponent } from './concert-spects/concert-spects.component';
import { AboutComponent } from './about/about.component';
//import { ConcertSpectDetailComponent } from './concert-spect-detail/concert-spect-detail.component';

const routes: Routes = [
  { path: '', component: ConcertSpectsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
