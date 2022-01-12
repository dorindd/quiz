import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GitService {
  pointsGit=new BehaviorSubject<any>([]);
  count:any=0
  finishGit=new BehaviorSubject<any>([]);
  points:any=1
  constructor() {




   }

   getGit(){
    this.count++;

   this.pointsGit.next(this.count)



       }

getFinish(){
this.points+=this.points+9;


this.finishGit.next(this.points)
}



}
