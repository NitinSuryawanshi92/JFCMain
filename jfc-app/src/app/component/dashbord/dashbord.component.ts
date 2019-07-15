import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html'
})
export class DashbordComponent implements OnInit {
  public selectedButtonId: number = 1;
  constructor() { }

  ngOnInit() {
  }
  public userManagment(event):void{
console.log(event);
  }

}
