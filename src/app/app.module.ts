import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { RootComponent } from './dashboard/root/root.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsService } from './services/settings.service';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    MsgIconBtnComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
