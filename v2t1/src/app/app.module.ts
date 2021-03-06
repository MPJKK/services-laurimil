import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ListMediaComponent } from './list-media/list-media.component';
import { MediaService } from './services/media.service';
import { HttpClientModule } from '@angular/common/http';

import { DigitransitService } from './services/digitransit.service';
import { RoutesComponent } from './routes/routes.component';



@NgModule({
  declarations: [
    AppComponent,
    ListMediaComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [MediaService, DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
