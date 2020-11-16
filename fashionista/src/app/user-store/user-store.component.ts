import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  userRef = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(public userService: UserService) { }

  result: string;
  ngOnInit(): void {
  }

  storeUserDetails(): void {
    this.userService.storeUserDetailsInDB(this.userRef.value).subscribe(data => this.result = data.msg);
  }

}
