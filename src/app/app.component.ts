import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zulian';

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.initTheme();
    this.initRouteConfig();
  }

  initRouteConfig() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.data)
    ).subscribe(data => {
      this.titleService.setTitle(data['title'] || this.title);
    });
  }


  initTheme(){
    let themeColor = localStorage.getItem('themeColor');
    if(themeColor){
      document.documentElement.style.setProperty('--primary-color', themeColor);
      document.documentElement.style.setProperty('--primary-color-20', themeColor + '33');
    }
  }
}
