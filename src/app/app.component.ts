import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openBox', [
      state('start', style({
        backgroundImage: 'url("../assets/closed.png")',
      })),
      state('end', style({
        backgroundImage: 'url("../assets/opened.png")',
      })),
      transition('start => end',[
        animate("600ms")
      ]),
    ]),

    trigger('showCircle', [
      state('start', style({
        opacity: "0",
        bottom: "220px"
      })),
      state('end', style({
        opacity: "1",
        bottom: "270px"
      })),
      transition('start => end',[
        animate('1s')
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'angular-anim';
  clickedBoxState = 'start';

  toggleAnimation() {
    this.clickedBoxState = this.clickedBoxState === "end" ? "start" : "end";
  }
}
