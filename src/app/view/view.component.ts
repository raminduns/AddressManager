import { Component, OnInit } from '@angular/core';
import { UserContent } from '../models/user-content';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public rowData = []
  public columnDefs = [];
  public nameFilter = '';
  public countryFilter = '';
  private _gridApi;
  constructor(private _sharedService: SharedDataService) { }

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Full Name', field: 'fullName', filter: true },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Gender', field: 'gender' },
      { headerName: 'Expertise', field: 'role' },
      { headerName: 'Address', field: 'address' },
      { headerName: 'Country', field: 'country', filter: true },
      { headerName: 'Date', field: 'date'},
      {
        headerName: 'View Map',
        cellRenderer: (params) => {
          const url = '/map/' + params.data.country;
          return '<a href="' + url + '">View</a>';
        }
      }
    ];

    this.rowData = this._sharedService.getData();
  }

  onGridReady(params) {
    this._gridApi = params.api;
  }

  public filterData() {
    const data = this.rowData;
    const filteredData = data.filter(x => x.fullName.toLowerCase().includes(this.nameFilter.toLowerCase()))
      .filter(x => x.country.toLowerCase().includes(this.countryFilter.toLowerCase()));
    this._gridApi.setRowData(filteredData);
  }
}
