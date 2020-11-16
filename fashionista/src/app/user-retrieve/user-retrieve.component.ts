import { Component, OnInit } from '@angular/core';
import { User } from '../models/model.user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-retrieve',
  templateUrl: './user-retrieve.component.html',
  styleUrls: ['./user-retrieve.component.css']
})
export class UserRetrieveComponent implements OnInit {

  users: User[];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserDetails().subscribe(data => {
      this.users = data;
    })
  }

  deleteUserById(id: any) {
    console.log(id);
    this.userService.deleteUserById(id).subscribe((result) => {
      console.log("User deleted successfully")
    })
    window.location.reload();
  }

}
