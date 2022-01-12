import { Injectable } from '@angular/core';
import{BehaviorSubject, interval, Observable} from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'})

export class SharedataService {

myPoints=new BehaviorSubject<any>([]);
timeLeft=new BehaviorSubject<any>([]);
 count:any=0



  constructor() { }



  shareData(){

    this.count--;
    this.myPoints.next(this.count)



  }

 numbercount:any=1200;

mycountstop:any;


getStart(){










this.count --;
this.timeLeft.next(this.numbercount);

  if(this.numbercount<0){
    this.mycountstop.unsubscribe(this.numbercount=0);
    this.numbercount=''


  }






  this.mycountstop= setInterval(() =>{
    this.numbercount --;
    this.timeLeft.next(this.numbercount);
    if(this.numbercount==0){

       clearInterval(this.mycountstop);

       Swal.fire({
        backdrop:false,
        position: 'center',
        width: 500,
    icon:'error',
        title: 'Time expired!',

      });

      let audio = new Audio();
audio.src = '../assets/sound2.wav';
audio.load();
audio.play();
      this.numbercount=0




   }

    },1500);

}







}
