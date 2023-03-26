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

radiobtn(){
  var myRadio = $('input[type="radio"]:checked');
  myRadio.on('click', function () {
    if (myRadio.attr('checked')) {
      myRadio.removeAttr('checked');
      myRadio.prop('checked', false);
    } else {
      myRadio.attr('checked', 'checked');
      myRadio.prop('checked', true);
    }
  });

}

}

