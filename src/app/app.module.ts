import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { paragraphList } from './paragraph-list/paragraph-list.component';

@NgModule({
  declarations: [
    AppComponent,
    paragraphList

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
