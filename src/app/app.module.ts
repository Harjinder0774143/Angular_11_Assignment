import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PipelistPipe } from './pipelist.pipe';
import { HighlightDirective } from './highlight.directive';

import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MovieCardComponent } from './movie-card/movie-card.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentDetailComponent } from './content-detail/content-detail.component'
import { MaterialModule } from './material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PipelistPipe,
    HighlightDirective,
    ContentListComponent,
    ContentCardComponent,
    HoverAffectDirective,
    AppMessagesComponent,
    ModifyContentComponentComponent,
    MovieCardComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false,
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [ContentListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
