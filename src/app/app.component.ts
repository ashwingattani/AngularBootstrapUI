import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'JioANPR';
  previousSelectedMenuId = "-1"

  dataSet = [
    {name: "Home", src: "../assets/Home.png"},
    {name: "User Management", src: "../assets/UserManagement.png"},
    {name: "Health Monitor", src: "../assets/HealthMonitor.png"},
    {name: "Stats", src: "../assets/Stats.png"},
    {name: "Settings", src: "../assets/Setting.png"},
    {name: "Support", src: "../assets/Support.png"},
    {name: "Help", src: "../assets/Help.png"}
  ]

  menuItemSelected(id: string) {
    document.getElementById(id).style.backgroundColor = "#F35561";
    if (parseInt(this.previousSelectedMenuId) >= 0 ) {
      document.getElementById(this.previousSelectedMenuId).style.backgroundColor = "transparent";
    }

    this.previousSelectedMenuId = id;
  }

  logoutClicked() {
    console.log("Logout Clicked");
    
  }
}
