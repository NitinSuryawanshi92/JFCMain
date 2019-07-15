import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable()
export class AppService {
    
    constructor(private http: HttpClient) {}

    public loginUser(userName: string, password: string) {
       return this.http.get(environment.apiUrl + "/getloginUser?userName=" + userName + "&password=" + password);   
      }
  }