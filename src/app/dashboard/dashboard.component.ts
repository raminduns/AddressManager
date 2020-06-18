import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
// import jsonData from '../../assets/dummy-data.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router, private _sharedService: SharedDataService) { }

  ngOnInit() {
  }

  public Navigate(number): void {
    switch (number) {
      case 1:
        this._router.navigate(['/add']);
        break;
      case 2:
        this._router.navigate(['/view']);
        break;
      default:
        this._router.navigate(['/']);
        break;
    }
  }
}
