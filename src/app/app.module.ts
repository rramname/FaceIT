import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApicallerService } from './apicaller.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderIntercepter } from './header.intercepter';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApicallerService,{
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderIntercepter,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
