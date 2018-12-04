import { Component, OnInit } from '@angular/core';
import { TableSettingService } from '../services/tablesetting.service';

@Component({
  selector: 'app-smarttable',
  templateUrl: './smarttable.component.html',
  styleUrls: ['./smarttable.component.css']
})
export class SmarttableComponent implements OnInit {
  settings;
  data: any;

  constructor(private tablesettingservice: TableSettingService) {
    console.log('Init');
    this.settings = this.tablesettingservice.settingTable();
    this.data  = this.tablesettingservice.settingData();
  }

  ngOnInit() {
  }

}
