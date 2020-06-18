import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public fullName: string;
  public country: string;
  // private _userId: string;
  constructor(private route: ActivatedRoute, private _sharedService: SharedDataService) { }

  ngOnInit() {
    const sub = this.route.params.subscribe(params => {
      this.country = params['id'];
      // const tempUser = this._sharedService.getData().filter(x => x.id === this._userId)[0];
      // if (tempUser) {
      //   this.address = tempUser.country;
      //   this.fullName = tempUser.fullName;
      // }
    }).unsubscribe();
  }
}
