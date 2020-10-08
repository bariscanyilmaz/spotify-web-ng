import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {


  constructor(private router:Router) { }
  paths:'collections'|'search'|'artists'|'podcasts'|'albums';
  pathValues:string[]=[];

  ngOnInit(): void {
    this.router.events.subscribe((ev:any)=>{
      if (ev instanceof NavigationEnd) {
        this.pathValues=ev.url.split('/').filter(e=>e!=='');
      }
    });
  }



}
