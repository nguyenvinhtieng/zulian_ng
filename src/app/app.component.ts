import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zulian';
  ngOnInit() {
    let themeColor = localStorage.getItem('themeColor');
    if(themeColor){
      document.documentElement.style.setProperty('--primary-color', themeColor);
      document.documentElement.style.setProperty('--primary-color-20', themeColor + '33');
    }
  }
}
