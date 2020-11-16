import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/model.user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id: any;
  user: User = new User();
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(result => {
      this.user = result;
      console.log(this.user);
    });
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      console.log("Update error");
      return;
    } else {
      console.log(this.user);
      this.userService.updateUserDetailsInDB(this.user, this.id).subscribe(result => {
        console.log("User updated successfully");
        this.router.navigate(['/userRetrieve']);
      }, (err) => {
        console.log(err);
      })
    }
  }

}
