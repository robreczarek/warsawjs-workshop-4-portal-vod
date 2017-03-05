import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { HeaderComponent } from './components/header/header.component';

import { VideoService } from './services/video.service';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SafePipe } from './pipes/safe.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    VideoListComponent,
    HeaderComponent,
    VideoPlayerComponent,
    SafePipe,
    SearchPipe,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    VideoService
  ],
  entryComponents: [
    VideoPlayerComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
