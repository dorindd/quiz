import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JavascriptserviceService {
  pointsJavascript=new BehaviorSubject<any>([]);
  count:any=0;
  finishJavascript=new BehaviorSubject<any>([]);
  points:any=1
  constructor() { }

  getJavascript(){
    this.count++;
   this.pointsJavascript.next(this.count)
       }

       getFinish(){
        this.points+=this.points+9;
        this.finishJavascript.next(this.points)
        }


}
