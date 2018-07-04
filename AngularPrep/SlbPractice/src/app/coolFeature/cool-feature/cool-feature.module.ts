import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoolFeatureRoutingModule } from './cool-feature-routing.module';
import { CoolFeatureComponent } from './cool-feature.component';

@NgModule({
  imports: [
    CommonModule,
    CoolFeatureRoutingModule
  ],
  declarations: [CoolFeatureComponent]
})
export class CoolFeatureModule { }
