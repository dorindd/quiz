import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AngularserviceService {
  pointsAngular=new BehaviorSubject<any>([]);
  count:any=0;
  finishAngular=new BehaviorSubject<any>([]);
  points:any=1
  constructor() { }
  getAngular(){
    this.count++;
   this.pointsAngular.next(this.count)
       };

       getFinish(){
        this.points+=this.points+9;
        this.finishAngular.next(this.points)
        }

}
