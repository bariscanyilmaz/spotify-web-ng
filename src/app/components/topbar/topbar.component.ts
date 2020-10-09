import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouteListenerService } from "src/app/services/route-listener.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  paths: 'collections' | 'search' | 'artists' | 'podcasts' | 'albums';
  pathValues: string[] = [];


  constructor(private router: Router,private routeListener:RouteListenerService) {

  }


  ngOnInit(): void {

    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationEnd) {
        this.pathValues = ev.url.split('/').filter(e => e !== '');
        this.routeListener.setRoute(this.pathValues);
      }
    });
  }



}
