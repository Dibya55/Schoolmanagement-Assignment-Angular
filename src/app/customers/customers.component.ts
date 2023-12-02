import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
// import {Component, Inject} from 'angular2/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  users:any;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    // this.usersService.getUsers().subscribe(data =>{
    //   this.users = data;
    // })
  }
   

}
