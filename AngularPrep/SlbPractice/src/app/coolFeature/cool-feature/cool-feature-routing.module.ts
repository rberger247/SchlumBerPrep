import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoolFeatureComponent } from './cool-feature.component';

const routes: Routes = [

  {
    path: 'coolFeature',
    component: CoolFeatureComponent,
    children: [
      {
        path: '',
        component: CoolFeatureComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoolFeatureRoutingModule { }
