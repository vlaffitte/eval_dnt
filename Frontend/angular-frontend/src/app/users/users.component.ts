import { Component, OnInit } from '@angular/core';
import {  IUser } from '../_interfaces/user';
import { UserServiceService } from '../_services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: IUser[] = []

  constructor( private userService: UserServiceService ) { }

  

  ngOnInit(): void {
    this.userService.getUsers()
   .subscribe(
    response => this.users = response,
    err => console.log(err)
    );
  
    this.userService.getData().subscribe((response) => {
      console.log('Response from API backend is ', response);
      this.users = response


    }, (error) => {
      console.log('Error is ', error);
    })
  };

 

  getUsers(): void {
    
 }


 
}
