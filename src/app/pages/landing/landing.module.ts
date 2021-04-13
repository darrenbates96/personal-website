import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { LandingRoutingModule } from './landing-routing.module';
import { ScrollModule } from 'src/app/shared/scroll/scroll.component';

@NgModule({
  declarations: [LandingComponent, LandingPageComponent],
  imports: [CommonModule, LandingRoutingModule, ScrollModule],
})
export class LandingModule {}
