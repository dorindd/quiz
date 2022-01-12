import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import Swal from 'sweetalert2';
import {SharedataService} from '../sharedata.service';
import{HtmlService} from '../html.service';
@Component({
  selector: 'html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HtmlComponent implements OnInit {
  txt: string = "<ul>tag";
  txt1: string = "<li>tag";
  txt2: string = "<lu>tag";
  txt3: string = "<th>";
  txt4: string = "<tr>";
  txt5: string = "<row>";
  txt6: string = "<td>";
  txt7: string = '<quptation></quptation>';
  txt8: string = "<quo></quo>";
  txt9: string = "<p></p>";
  txt10: string = "<q></q>"
  txt11: string = "<th>tag";
  txt12: string = "<tr>tag";
  txt13: string = "<td>tag";
  txt14: string = "<t head>tag";
  txt15: string = "<span>";
  txt16: string = "<div>";
  txt17: string = "<class>";
  fun:boolean=false;
  show: boolean = true;
  show1: boolean = true;
  show2: boolean = true;
  show3: boolean = true;
  show4: boolean = true;
  show5: boolean = true;
  show6: boolean = true;
  show7: boolean = true;
  show8: boolean = true;
  show9: boolean = true;
  nrsecounds:any;
  constructor(private mysharedata: SharedataService,private myhtmlservice:HtmlService) {
    this.mysharedata.timeLeft.subscribe(d=>{
      this.nrsecounds=d;});
  }
  ngOnInit(): void {
  }
  getFun(){
    this.show1=false;
      }
  getData() {
this.myhtmlservice.getHtml()
    this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000,
    });
    this.fun=true;
    this.show = false;
    this.show1 = true;
  }
  getData1() {
    this.myhtmlservice.getHtml()
     this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show2 = false;
    this.show = true;
  }
  getData2() {
    this.myhtmlservice.getHtml()
   this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show2 = true;
    this.show3 = false;
  }
  getData3() {
    this.myhtmlservice.getHtml()
    this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show3 = true;
    this.show4 = false
  }
  getData4() {
    this.myhtmlservice.getHtml()
   this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width:300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show4 = true;
    this.show5 = false;
  }
  getData5() {
    this.myhtmlservice.getHtml()
    this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show5 = true;
    this.show6 = false;
  }
  getData6() {
    this.myhtmlservice.getHtml()
    this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show6 = true;
    this.show7 = false;
  }
  getData7() {
    this.myhtmlservice.getHtml()
     this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show7 = true;
    this.show8 = false;
  }
  getData8() {
    this.myhtmlservice.getHtml()
    this.mysharedata.shareData();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show8 = true;
    this.show9 = false;
  }
  getData9() {
    this.myhtmlservice.getHtml()
     this.mysharedata.shareData();
     this.myhtmlservice.getFinish();
    Swal.fire({
      backdrop:false,
      position: 'center',
      width: 300,
      icon: 'success',
      title: 'Correct',
      timer: 1000
    })
    this.show9 = true;
  }
  getStart() {

    this.mysharedata.getStart();
  }
getAnswer(){
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.fun=true;
  this.show = false;
  this.show1 = true;
}
getAnswer1(){
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show2 = false;
  this.show = true;
}
getAnswer2(){
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show2 = true;
  this.show3 = false;
}
getAnswer3(){
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show3 = true;
  this.show4 = false
}
getAnswer4(){
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show4 = true;
  this.show5 = false;
}
getAnswer5(){
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show5 = true;
  this.show6 = false
}
getAnswer6(){
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show6 = true;
  this.show7 = false;
}
getAnswer7(){
  Swal.fire({

    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show7 = true;
  this.show8 = false;
}
getAnswer8(){
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show8 = true;
  this.show9 = false;
}
getAnswer9(){
  this.myhtmlservice.getFinish();
  Swal.fire({
    backdrop:false,
    position: 'center',
    width: 300,
    icon: 'error',
    title: 'Incorrect!',
    timer: 1500
  });
  this.show9 = true;
}

}
