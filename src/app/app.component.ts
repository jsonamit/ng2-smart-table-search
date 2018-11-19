import { Component } from '@angular/core';

import {  LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-table-search';

  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: true
      },
      name: {
        title: 'Full Name',
        filter: true
      },
      username: {
        title: 'User Name',
        filter: true
      },
      email: {
        title: 'Email',
        filter: true
      }
    },
    actions: false
  };

  data = [
      {
        id: 11,
        name: 'Nicholas DuBuque',
        username: 'Nicholas.Stanton',
        email: 'Rey.Padberg@rosamond.biz'
      },
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      },
      {
        id: 11,
        name: 'Nicholas DuBuque',
        username: 'Nicholas.Stanton',
        email: 'Rey.Padberg@rosamond.biz'
      },
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      },
      {
        id: 11,
        name: 'Nicholas DuBuque',
        username: 'Nicholas.Stanton',
        email: 'Rey.Padberg@rosamond.biz'
      },
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      },
  ];

  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
  }
}
