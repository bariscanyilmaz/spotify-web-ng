import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {


  @Input('isArtist') isArtist:boolean=false;
  @Input('title') title:string='Pop Goes Classical';
  @Input('defination') defination:string='Your favorite songs';
  @Input('route') route:string='/collections/playlists';

  constructor() { }


  ngOnInit(): void {
  }

}
