import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HighlightDirective } from './highlight.directive';

 

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HighlightDirective, 
    // UppercaseDirective
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
