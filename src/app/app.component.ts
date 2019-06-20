import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JioANPR';

  logoutClicked() {
    console.log("Logout Clicked");
    
  }

}
