import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }