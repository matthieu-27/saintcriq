import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedlightComponent } from './landing-page/redlight/redlight.component';
import { BumperComponent } from './landing-page/bumper/bumper.component';
import { HoodComponent } from './landing-page/hood/hood.component';
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
