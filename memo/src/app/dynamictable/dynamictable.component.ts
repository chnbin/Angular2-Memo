import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamictable',
  templateUrl: './dynamictable.component.html',
  styleUrls: ['./dynamictable.component.css']
})
export class DynamictableComponent implements OnInit {

private fieldArray: Array<any> = [];
private newAttr: any = {};

  constructor() { }

  ngOnInit() {
  }

  addFieldValue() {
    if (this.newAttr.code === undefined || this.newAttr.name === undefined) {
      return ;
    }

    console.log(this.newAttr);
    this.fieldArray.push(this.newAttr);
    console.log(this.fieldArray);
    this.newAttr = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onSubmit() {
    for (let field of this.fieldArray) {
      console.log(field);
    }
  }
}
