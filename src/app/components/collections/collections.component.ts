import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album  } from "src/app/models/albums";
import { DataService } from "src/app/services/data.service";
import { RouteListenerService } from 'src/app/services/route-listener.service';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit{


  results:Album[];

  constructor(private dataService:DataService,private routeListenerService:RouteListenerService,private router:Router) {

  }

  ngOnInit(): void {  

    this.dataService.getData().subscribe(res=>{
      this.results=res;
    })

    this.routeListenerService.getRoute().subscribe(route=>{
      this.dataService.setData(route[1]);
    })
  
    this.routeListenerService.setRoute(this.router.url.split('/').filter(e => e !== ''));
  }

}
