import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HtmlService {
  pointsHtml=new BehaviorSubject<any>([]);
  count:any=0
  finishHtml=new BehaviorSubject<any>([]);
  points:any=1
  constructor() { }
  getHtml(){
    this.count++
this.pointsHtml.next(this.count)
    }
    getFinish(){
      this.points+=this.points+9;
      this.finishHtml.next(this.points)
      }


}
