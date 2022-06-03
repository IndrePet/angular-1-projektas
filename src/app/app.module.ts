import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkaiciuokleComponent } from './components/skaiciuokle/skaiciuokle.component';
import { RezervuarasComponent } from './components/rezervuaras/rezervuaras.component';

@NgModule({
  declarations: [AppComponent, SkaiciuokleComponent, RezervuarasComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
