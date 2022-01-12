import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CssserviceService {
  pointsCss=new BehaviorSubject<any>([]);
  count:any=0;
  finishCss=new BehaviorSubject<any>([]);
  points:any=1
  constructor() { }

  getCss(){
    this.count++;
   this.pointsCss.next(this.count)
       }

       getFinish(){
        this.points+=this.points+9;
        this.finishCss.next(this.points)
        }

}
