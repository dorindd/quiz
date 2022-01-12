import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {SharedataService} from '../sharedata.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  number:any;
  





  constructor(private mysharedata: SharedataService) {
    if(this.number==0){
      this.mysharedata.myPoints.subscribe(d=>{
        this.number=d;});
      }else{
        this.mysharedata.myPoints.subscribe(d=>{
          this.number=0+d;
        });
      }













  }
  ngOnInit(): void {



  }
  getReset() {
    window.location.reload();
  }
  getScore(){


    if(this.number==0){
      Swal.fire({
        backdrop:false,
        position: 'center',
        width: 500,
        title: 'Start the Quiz to be evaluated!',
      });
    }
     else if(this.number>=1 && this.number<=10){
      Swal.fire({
        backdrop:false,
        position: 'center',
        width: 500,
        title: 'Your Theoretical FrontEnd skills are low!',
      });
    } else if(this.number>=10 && this.number<=20){
      Swal.fire({
        backdrop:false,
        position: 'center',
        width: 500,
        title: 'Your Theoretical FrontEnd skills are for beginner!',
      });
    }
    else if(this.number>=20 && this.number<=30){
      Swal.fire({
        backdrop:false,
        position: 'center',
        width: 500,
        title: 'Your Theoretical FrontEnd skills  are average!',
      });
    }
    else if(this.number>=30 && this.number<=40){
      Swal.fire({
        backdrop:false,
        position: 'center',
        width: 500,
        title: 'Your Theoretical FrontEnd skills  are good!',
      });
    }

  else if(this.number>=40 && this.number<=50){
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 500,
      title: 'Congratulations!Your Theoretical FrontEnd skills  are very good! ',
    });

  }

}
}



