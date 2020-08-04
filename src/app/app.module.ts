import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './add.component';
import { AppComponent } from './app.component';
import { AsyncComponent } from './async.component';
import { DestroyedComponent } from './destroyed.component';
import { RegularComponent } from './regular.component';
import { SinkComponent } from './sink.component';
import { UntilComponent } from './until.component';

@NgModule({
  declarations: [
    AppComponent,
    RegularComponent,
    SinkComponent,
    AddComponent,
    AsyncComponent,
    UntilComponent,
    DestroyedComponent,
  ],
  // for stackblitz
  entryComponents: [
    AppComponent,
    RegularComponent,
    SinkComponent,
    AddComponent,
    AsyncComponent,
    UntilComponent,
    DestroyedComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
