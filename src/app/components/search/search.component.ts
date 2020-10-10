import { flatten } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('container') container:ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    
  }

  left(){
    this.container.nativeElement.scrollLeft=0;
  }

  right(){
    this.container.nativeElement.scrollLeft=1200;
  }

  
  

}
