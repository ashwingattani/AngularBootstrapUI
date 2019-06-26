import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cameraList:string[] = ["Gate A","Gate B"]
  cameraPlaceHolder: string = "Select Camera"

  headerItems = [
    {"name": "ENTRY", "value": "100", "src": "../assets/Entry.png", "color": "#59BE94"},
    {"name": "EXIT", "value": "25", "src": "../assets/Exit.png", "color": "#F35561"},
    {"name": "UNREGISTERED", "value": "04", "src": "../assets/UnRegistered.png", "color": "#11C1D1"},
    {"name": "ALERTS", "value": "05", "src": "../assets/Alert.png", "color": "#6CBDE9"},
  ]

  constructor() { }

  ngOnInit() {
  }

  changeCamera(value) {
      console.log(value);
      this.cameraPlaceHolder = value
  }

}
