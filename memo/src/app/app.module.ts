import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from "./modules/MaterialModule";
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { SmarttableComponent } from './smarttable/smarttable.component';
import { TableSettingService } from './services/tablesetting.service';
import { DynamictableComponent } from './dynamictable/dynamictable.component';

@NgModule({
  declarations: [
    AppComponent,
    SmarttableComponent,
    DynamictableComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    Ng2SmartTableModule
  ],
  providers: [TableSettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
