import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedlightComponent } from './redlight/redlight.component';
import { BumperComponent } from './bumper/bumper.component';
import { HoodComponent } from './hood/hood.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    RedlightComponent,
    BumperComponent,
    HoodComponent,
    LandingPageComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
