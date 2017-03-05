import { Component, OnInit } from '@angular/core';

import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video/video';
import { VideoPlayerComponent } from '../video-player/video-player.component';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  private videos: Video[]
  private video: Video
  private searchFor: string

  constructor(
    private videoService: VideoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.videoService.search().subscribe(videos=>{
      this.videos = videos;
    })
  }

  onVideoClick(video: Video) {
    const modalRef = this.modalService.open(VideoPlayerComponent);
    modalRef.componentInstance.video = video;


  }

}
