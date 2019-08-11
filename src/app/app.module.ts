import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {NgjLoggerService} from "ngj-logger";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./component/registration/registration.component";
import {ContactUsComponent} from "./component/contact-us/contact-us.component";
import {PageNoFoundComponent} from "./component/page-no-found/page-no-found.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CountryService} from "./service/country.service";
import {EventService} from "./service/event.service";
import {HttpErrorHandler} from "./service/http-error-handler.service";
import {MessageService} from "./service/message.service";
import {ExceptionService} from "./service/exception.service";
import {ConfigurationService} from "./service/configuration.service";
import {UtilityService} from "./service/utility.service";
import {httpInterceptorProviders} from "./http-interceptors";


const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNoFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    PageNoFoundComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CountryService,
    EventService,
    HttpErrorHandler,
    MessageService,
    ExceptionService,
    ConfigurationService,
    UtilityService,
    httpInterceptorProviders,
    NgjLoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
