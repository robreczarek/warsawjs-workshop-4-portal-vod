import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Video } from '../models/video/video';
import 'rxjs/Rx';

@Injectable()
export class VideoService {

  private dataLink = '/assets/search.json';


  constructor(private http: Http) { }

  search(): Observable<Video[]> {
    return this.http.get(this.dataLink)
      .map(res=>{
        let data = res.json();

        return data.items
          .filter(value => value.id.videoId)
          .map(value=>{

          let el:Video = {
            id: value.id.videoId,
            description: value.snippet.description,
            thumb: value.snippet.thumbnails.high.url,
            title: value.snippet.title
          }
          return el;

        });
      })
  }

  get(id): Observable<Video> {
    console.log('id: ', id)
    return this.search()
      .map(videos => {
        return videos.filter(video => {
          return video.id === id
        })
      })
      .map(videos => {
        console.log(videos)
         return videos[0]
       })
    }

}
