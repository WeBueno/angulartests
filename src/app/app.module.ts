import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppService } from './services/services.service';
import { CostcenterCostsComponent } from './costcenter-costs/costcenter-costs.component';
import { IndividualCostsComponent } from './individual-costs/individual-costs.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    CostcenterCostsComponent,
    IndividualCostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
