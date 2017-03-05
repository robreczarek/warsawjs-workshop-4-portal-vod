import { Component, OnInit } from '@angular/core';

import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  private list: Video[]

  constructor(private videoService: VideoService) { }

  ngOnInit() {

  }

}
