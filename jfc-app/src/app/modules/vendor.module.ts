 import { NgModule } from '@angular/core';
import {  ButtonModule,InputTextModule, CalendarModule, ListboxModule, OverlayPanelModule} from "primeng/primeng";

 @NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    CalendarModule, 
    ListboxModule,
    OverlayPanelModule
  ]
 })
export class VendorModule { }
