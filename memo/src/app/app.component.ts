import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { MyDateAdapter } from './classes/myDateAdapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter}
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  startDate = new FormControl();

  constructor(dateAdaper: DateAdapter<NativeDateAdapter>) {
    dateAdaper.setLocale('zh-tw');
  }
  ngOnInit() {
    // Set current date
    this.startDate.setValue(new Date());
  }
}
