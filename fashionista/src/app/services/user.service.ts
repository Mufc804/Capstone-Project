import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/model.user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  getAllUserDetails(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:9090/user/userFromDB");
  }

  getUserById(userId): Observable<User> {
    return this.httpClient.get<User>("http://localhost:9090/user/userById/" + userId);
  }

  storeUserDetailsInDB(userRef): Observable<any> {
    return this.httpClient.post("http://localhost:9090/user/storeUser", userRef);
  }

  deleteUserById(userId): Observable<any> {
    return this.httpClient.delete("http://localhost:9090/user/deleteUserById/" + userId);
  }

  updateUserDetailsInDB(userRef, userId): Observable<any> {
    return this.httpClient.put("http://localhost:9090/user/updateUser/" + userId, userRef);
  }
}
