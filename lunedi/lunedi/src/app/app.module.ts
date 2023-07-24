import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JedanComponent } from './jedan/jedan.component';
import { DvaComponent } from './dva/dva.component';
import { TriComponent } from './tri/tri.component';

@NgModule({
  declarations: [
    AppComponent,
    JedanComponent,
    DvaComponent,
    TriComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
