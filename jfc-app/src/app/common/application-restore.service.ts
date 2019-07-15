import { Injectable } from '@angular/core';
import { ApplicationFields, ApplicationStore } from './application-store';
import { Router } from '@angular/router';
@Injectable()
export class ApplicationRestore {
    public applicationFields: ApplicationFields = {
        selectedUserRoleJson: undefined,
    }
  
    constructor(private applicationStore: ApplicationStore, private router: Router) { }

   
   
    // public setValuesOfStore(): void {
    //     this.setApplicationFields();
    // }

    // public setApplicationFields(): void {
    //     this.applicationFields = this.applicationStore.currentApplicationFields;
    //     if (this.applicationFields) {
    //         (window as any).sessionStorage.setItem("applicationFields", JSON.stringify(this.applicationFields));
    //     }
    // }
  
    // public undefinedUrlToBeStoredOnBrowserRefresh(applicationFields: ApplicationFields): void {
    //     (window as any).sessionStorage.setItem("applicationFields", JSON.stringify(applicationFields));
    // }
} 
