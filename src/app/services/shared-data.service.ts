import { Injectable } from '@angular/core';
import { UserContent } from '../models/user-content';
import jsonData from '../../assets/dummy-data.json';

@Injectable()
export class SharedDataService {
  private userData = jsonData;
  constructor() { }

  public getData() {
    return this.userData;
  }

  public addData(user: UserContent) {
    this.userData.push(user);
  }
}
