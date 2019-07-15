import { Component, OnInit } from '@angular/core';
import { UserLoginServie } from './user-login.component.service';
import { CalendarModule } from 'primeng/calendar';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html'

})
export class UserLoginComponent implements OnInit {
  public userName: string = null;
  public password: string = null;
  public dateForCronJob: Date;
  public cronJobId: Number;
  public cronJobTime: string;
  public cronJobTimehr: string;
  public cronJobTimeMin: string;
  constructor(private userLoginServie: UserLoginServie) { }

  ngOnInit() {
  }
  public userLogin(): void {

    this.userLoginServie.loginUser(this.userName, this.password).subscribe(
      (res: any) => {
        console.log(res);
      }
    )}

  public selectTimeForCronJob(event: any): void {
    this.cronJobTime = event;
    this.cronJobTimehr = this.cronJobTime.toString().substring(16, 18);
    this.cronJobTimeMin = this.cronJobTime.toString().substring(19, 21);
    this.cronJobId=1;
    this.userLoginServie.setCronJobTime(this.cronJobTimehr, this.cronJobTimeMin,this.cronJobId).subscribe(
      (res: any) => {
      }
      )}
}