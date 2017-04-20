import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template : `<app-my-component [Array]="myArray"></app-my-component> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myArray: Array<string>; 
  constructor() { 
    this.myArray = ["Mussie", 'Kahsai', 'Ghebregziabher', 'Temsghen', 'Senai', 'Kidsti'];
  }
}
