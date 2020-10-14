import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayerComponent } from './components/player/player.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { PlayListComponent } from './components/play-list/play-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlayerComponent,
    TopbarComponent,
    SearchComponent,
    HomeComponent,
    AlbumCardComponent,
    CollectionsComponent,
    GenreCardComponent,
    PlayListComponent
  ],
  imports: [
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
