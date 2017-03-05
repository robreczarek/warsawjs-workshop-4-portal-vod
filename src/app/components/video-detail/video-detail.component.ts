import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video/video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [ VideoService ]
})
export class VideoDetailComponent implements OnInit {

  private video: Video

  constructor(
    private videoService: VideoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params
      .map((params:any) => params.videoId)
      .switchMap(id=> this.videoService.get(id))
      .subscribe(video => {
        this.video = video
        console.log(video)
      })
  }

}
