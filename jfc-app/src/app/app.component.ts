import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from './app.service';
import { UiMessageService } from '../app/common/components/ui-message/ui-message.service';
import { ApplicationStore } from '../app/common/application-store';
import { ApplicationRestore } from './common/application-restore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showLogInPage: boolean = true;
  public userName: string = null;
  public password: string = null;
  public receivedUserRoleJson: Jfc.JfcUserJson[] = [];
  public selectedUserRoleJson: Jfc.JfcUserJson;
  constructor(private router: Router, private _location: Location, private appService: AppService, private uiMessageService: UiMessageService, private applicationStore: ApplicationStore, private applicationRestore: ApplicationRestore) { }
  public ngOnInit(): void {
   
    if (this._location.path().includes("/")) {
      this.showLogInPage = false;
    }
    else {
      this.showLogInPage = true;
    }
  }
  public userLogin(): void {

    this.appService.loginUser(this.userName, this.password).subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          this.showLogInPage = false;
          this.uiMessageService.resetUiMessages("Invalid User Name or Password, please enter again.");
          this.receivedUserRoleJson = res;
          this.selectedUserRoleJson = this.receivedUserRoleJson[0];
          this.applicationStore.currentApplicationFields.selectedUserRoleJson = this.selectedUserRoleJson
        //  this.goToUserLoginPage();
          this.goToDashbord();
        } else {
          this.uiMessageService.addMessage("Invalid User Name or Password, please enter again.");
        }
      },(error: any) => {
        console.log(error);
      }
    );

  }
  goToDashbord(): any {
    this.router.navigate(["dashbord"]);

    if (this._location.path().includes("/")) {
      this.showLogInPage = false;
      if (this._location.path() === "/dashbord") {
        this.router.navigate(["dashbord"]);
      }
    }
  }

  private goToUserLoginPage() {
    this.router.navigate(["userlogin"]);

    if (this._location.path().includes("/")) {
      this.showLogInPage = false;
      if (this._location.path() === "/userlogin") {
        this.router.navigate(["userlogin"]);
      }
    }
  }
}
