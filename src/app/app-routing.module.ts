import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { HomeComponent } from './components/home/home.component';
import { PlayListComponent } from './components/play-list/play-list.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'collections/:playlists', component: CollectionsComponent },
  { path: 'playlist/:id', component: PlayListComponent },
  { path: 'album/:id', component: PlayListComponent },
  { path: 'artist/:id', component: ArtistComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
