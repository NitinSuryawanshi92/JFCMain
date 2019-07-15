
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface ApplicationFields {
  selectedUserRoleJson:Jfc.JfcUserJson;

}

export const INITIAL_STATE_FIELDS = {
  selectedUserRoleJson:undefined,
}


@Injectable()
export class ApplicationStore {
  public currentApplicationFields: ApplicationFields = INITIAL_STATE_FIELDS;

 


  constructor() { }

 
}
