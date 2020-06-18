import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.user = new User();
  }

  public OnClick(f: NgForm): void {
    if (this.user && this.user.username === 'admin' && this.user.password === 'admin@123') {
      // redirect to dashboard
      console.log('login success');
      this._router.navigate(['/view']);
    } else {
      alert('Invalid Credentials!');
    }
  }
}
