import { Component, OnInit } from '@angular/core';
import { RouteListenerService } from 'src/app/services/route-listener.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  pathValues:string[]=[];

  constructor(private routeListener:RouteListenerService) { }

  ngOnInit(): void {
    this.routeListener.getRoute().subscribe((arr)=>{
      this.pathValues=arr;
      console.log(this.pathValues);
    })

  }

}
