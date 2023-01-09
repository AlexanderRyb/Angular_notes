import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { NoteSelectorMenuComponent } from './note-selector-menu/note-selector-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFieldComponent,
    NoteSelectorMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [InputFieldComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
