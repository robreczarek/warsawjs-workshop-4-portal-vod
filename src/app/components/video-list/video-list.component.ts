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

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videos = [
      { id: 'cos', description: 'jakos 1', title: 'test 1', thumb: '/url.png' },
      { id: 'cos', description: 'jakos 2', title: 'test 2', thumb: '/url.png' },
      { id: 'cos', description: 'jakos 3', title: 'test 3', thumb: '/url.png' }
    ]
  }
}
