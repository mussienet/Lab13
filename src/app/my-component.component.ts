import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template : `<h1>Array Contents</h1> <p>listing them by *ngFor and apply custom directives to apply on the list
                  which changes the list all to Upper Case</p>
            <h3>
                  <ul>
                      <li *ngFor="let element of myArray" appUpper>{{element}}</li>
                  </ul>
            </h3>`
})
export class MyComponentComponent {
  @Input ("Array") myArray;
}
