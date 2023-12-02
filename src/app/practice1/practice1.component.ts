import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  addition(num1:number,num2:number){
    return num1+num2;
  }
  salSlip:any;
  getSalarySlip(){
    this.salSlip = "Salary Slip"
  }

}
