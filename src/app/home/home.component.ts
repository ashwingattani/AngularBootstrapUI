import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cameraList:string[] = ["Gate A","Gate B"]
  cameraPlaceHolder: string = "Select Camera"

  constructor() { }

  ngOnInit() {
  }

  changeCamera(value) {
      console.log(value);
      this.cameraPlaceHolder = value
  }

}
