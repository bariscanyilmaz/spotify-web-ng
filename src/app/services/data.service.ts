import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Album } from '../models/albums';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data: Subject<Album[]> = new Subject();

  constructor() {

  }

  setData(route: string) {
    switch (route) {
      case 'albums':
        this.setAlbums();
        break;
      case 'playlists':
        this.setPlaylists();
        break;
      case 'podcasts':
        this.setPodcasts();
        break;
      case 'artists':
        this.setArtists();
        break;
      default:
        this.setPlaylists();
        break;
    }
  }

  getData() {
    return this._data.asObservable();
  }


  private setPlaylists() {
    this._data.next(
      [
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
      ]
    );
  }

  private setPodcasts() {
    this._data.next(
      [
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
      ]
    );
  }

  private setArtists() {
    this._data.next(
      [
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: true, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: true, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: true, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: true, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: true, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: true, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: true, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: true, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: true, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: true, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: true, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: true, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: true, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: true, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: true, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: true, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: true, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: true, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: true, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: true, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: true, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: true, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: true, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: true, routeLink: '/playlist/rainsounds' },


      ]
    );
  }

  private setAlbums() {
    this._data.next(
      [
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
        { title: 'This is Rammstein', defination: 'Rammstein', isArtist: false, routeLink: '/playlist/rammstein' },
        { title: 'This is Manga', defination: 'MaNga', isArtist: false, routeLink: '/playlist/manga' },
        { title: 'This is Queen', defination: 'Queen', isArtist: false, routeLink: '/playlist/queen' },
        { title: 'Rain sounds', defination: 'Steady rain without any thunder.', isArtist: false, routeLink: '/playlist/rainsounds' },
      ]
    );
  }





}
