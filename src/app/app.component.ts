import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'JioANPR';
  previousSelectedMenuId = "-1"

  menuItems = [
    {name: "Home", src: "../assets/Home.png", selectedSrc: "../assets/HomeSelected.png"},
    {name: "User Management", src: "../assets/UserManagement.png", selectedSrc: "../assets/UserManagementSelected.png"},
    {name: "Health Monitor", src: "../assets/HealthMonitor.png", selectedSrc: "../assets/HealthMonitorSelected.png"},
    {name: "Stats", src: "../assets/Stats.png", selectedSrc: "../assets/StatsSelected.png"},
    {name: "Settings", src: "../assets/Setting.png", selectedSrc: "../assets/SettingSelected.png"},
    {name: "Support", src: "../assets/Support.png", selectedSrc: "../assets/SupportSelected.png"},
    {name: "Help", src: "../assets/Help.png", selectedSrc: "../assets/HelpSelected.png"}
  ]

  healthItems = [ "CAMERA", "LPU", "LED" ];

  menuItemSelected(id: string) {
    document.getElementById(id).style.backgroundColor = "#F35561";
    (<HTMLImageElement>document.getElementById("img"+id)).src = this.menuItems[id]["selectedSrc"];

    if (parseInt(this.previousSelectedMenuId) >= 0 ) {
      document.getElementById(this.previousSelectedMenuId).style.backgroundColor = "transparent";
      (<HTMLImageElement>document.getElementById("img"+this.previousSelectedMenuId)).src = this.menuItems[this.previousSelectedMenuId]["src"];
    }

    this.previousSelectedMenuId = id;
  }

  logoutClicked() {
    console.log("Logout Clicked");
    
  }

  getHealthIcon(id: string) {
    return "../assets/GoodHealth.png"
  }
}
