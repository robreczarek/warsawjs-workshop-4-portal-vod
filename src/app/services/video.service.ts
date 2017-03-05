import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Video } from '../models/video/video';
import 'rxjs/Rx';

@Injectable()
export class VideoService {

  constructor(private http: Http) { }

  search(): Observable<Video[]> {
    return this.http.get('/assets/search.json')
        .map(res=>{
          let data = res.json()

          return data.items.map(value=>{

            let el:Video = {
              id: value.id.videoId,
              description: value.description,
              thumb: value.snippet.thumbnails.high.url,
              title: value.title
            }
            return el;

          });
        })
  }

}


/*import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Video } from '../models/video/video';

@Injectable()
export class VideoService {

  constructor(private http: Http) { }

  search(): Observable<Video[]> {
    return this.http.get('/assets/search.json')
      .map(value=>{
        let el:Video = {
          id: value.id.videoId,
          description: value.description,
          thumb: value.snippet.thumbnails.high.url,
          title: value.title
        }
        return el;
      })
  }

}
*/
