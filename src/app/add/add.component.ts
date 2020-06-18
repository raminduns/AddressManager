import { Component, OnInit } from '@angular/core';
import { UserContent } from '../models/user-content';
import { Role } from '../models/role';
import { SharedDataService } from '../services/shared-data.service';
import { Router } from '@angular/router';
import { v1 as uuid } from 'uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public userContent: UserContent;
  public countries: string[] = ['United Arab Emirates', 'Guatemala',
    'Seychelles', 'Norway', 'Russian Federation', 'Mozambique', 'Sri Lanka'];
  public genders = ['Male', 'Female'];

  public userRoles: Array<Role> = [{ Name: 'Angular', Filter: false },
  { Name: 'java', Filter: false },
  { Name: 'C#', Filter: false },
  { Name: 'git', Filter: false },
  { Name: 'html', Filter: false }
  ];

  constructor(private _shareService: SharedDataService, private _route: Router) {
    this.userContent = new UserContent();
    this.userContent.role = '';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userRoles.filter(x => x.Filter === true).forEach(element => {
      if (element) {
        this.userContent.role += element.Name + ' ';
      }
    });

    this.userContent.id = uuid();
    console.log(this.userContent);
    this._shareService.addData(this.userContent);
    this._route.navigate(['/view']);
    console.log('record added successfully');
  }
}
