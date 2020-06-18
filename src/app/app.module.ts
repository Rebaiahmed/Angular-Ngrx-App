import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MycounterComponent } from './components/mycounter/mycounter.component';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './Store/reducers/turial.reducer';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MycounterComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({  tutorial: reducer }),
    EffectsModule.forRoot([]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
