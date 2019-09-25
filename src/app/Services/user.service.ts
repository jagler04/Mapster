import { Injectable } from '@angular/core';
import { CreateClient, User } from './mapster.client';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private createClient: CreateClient) { }


  register(name: string, email: string, password: string, company: string) {
    let user = new User({
      email: email,
      password: password,
      companyname: company,
      username: name
    });

    return this.createClient.user(user);
  }

}
