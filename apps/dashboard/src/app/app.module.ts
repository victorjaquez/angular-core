import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@workshop/material';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
import { UiLoginModule } from '@workshop/ui-login';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HomeModule,
    ProjectsModule,
    CustomersModule,
    UiLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
