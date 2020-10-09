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
    }
  }

  getData() {
    return this._data.asObservable();
  }


  private setPlaylists() {
    this._data.next(
      [
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),

      ]
    );
  }

  private setPodcasts() {
    this._data.next(
      [
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),

      ]
    );
  }

  private setArtists() {
    this._data.next(
      [
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),

      ]
    );
  }

  private setAlbums() {
    this._data.next(
      [
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),
        new Album('This is Rammstein', 'Rammstein', false, '/playlist/rammstein'),
        new Album('This is Manga', 'MaNga', false, '/playlist/manga'),
        new Album('This is Queen', 'Queen', false, '/playlist/queen'),
        new Album('Rain sounds', 'Steady rain without any thunder.', false, '/playlist/rainsounds'),

      ]
    );
  }





}
