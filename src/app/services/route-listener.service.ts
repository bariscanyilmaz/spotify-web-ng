import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteListenerService {

  private _route:Subject<string[]>=new Subject<string[]>();

  constructor() { 

  }

  setRoute(route:string[]){
    
    this._route.next(route);

  }

  getRoute(){
    return this._route.asObservable();
  }
  


}
