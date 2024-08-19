import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerDetailsContainerComponent, SpeakersListContainerComponent } from './components/containers';

const routes: Routes = [
  { path: '', component: SpeakersListContainerComponent },
  { path: ':id', component: SpeakerDetailsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakersRoutingModule {}
