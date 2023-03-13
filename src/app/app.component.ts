import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NetflixClone';

  language = () => {
    let element = document.getElementById('language');
    // element?.style.color = --netflixWhite:
  };
}

