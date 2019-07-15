import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserLoginServie } from './component/user-login/user-login.component.service';
import { VendorModule } from './modules/vendor.module';
import {HttpClientModule} from '@angular/common/http';
import { AppService } from './app.service';
import { UiMessageComponent } from './common/components/ui-message/ui-message.component';
import { UiMessageService } from './common/components/ui-message/ui-message.service';
import { ApplicationStore } from './common/application-store';
import { ApplicationRestore } from './common/application-restore.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { UsermanagmentComponent } from './component/usermanagment/usermanagment.component';
import { SpinnerComponent } from './common/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UiMessageComponent,
    DashbordComponent,
    UsermanagmentComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    VendorModule
  ],
  exports: [
    VendorModule
  ],
  providers: [
    AppService,
    ApplicationStore,
    ApplicationRestore,
    UserLoginServie,
    VendorModule,
    UiMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
