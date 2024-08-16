import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'speakers',
    loadChildren: () => import('./features/speakers/speakers.module').then(m => m.SpeakersModule)
  },
  { path: '', redirectTo: 'speakers', pathMatch: 'full' },
  { path: '**', redirectTo: 'speakers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
