import { Component, OnInit } from '@angular/core';

import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  private videos: Video[]
  private video: Video
  private searchFor: string

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.search().subscribe(videos=>{
      this.videos = videos;
    })
  }

  onVideoClick(video: Video) {
    this.video = video;
  }

}
