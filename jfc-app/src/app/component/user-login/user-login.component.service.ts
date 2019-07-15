import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class UserLoginServie {
  
    constructor(private http: HttpClient) {}
  
    public loginUser(userName: string, password: string) {
       return this.http.get(environment.apiUrl + "/getloginUser?userName=" + userName + "&password=" + password);   
      }

      public setCronJobTime(cronJobTimehr: string, cronJobTimeMin: string,cronJobId:Number): any {
        return this.http.get(environment.apiUrl + "/setCronJobTime?cronJobTimehr=" + cronJobTimehr + "&cronJobTimeMin=" + cronJobTimeMin + "&cronJobId=" + cronJobId);   
      }
  }