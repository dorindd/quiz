import { Component, OnInit } from '@angular/core';
import { AngularserviceService } from '../angularservice.service';
@Component({
  selector: 'scoreangular',
  templateUrl: './scoreangular.component.html',
  styleUrls: ['./scoreangular.component.css']
})
export class ScoreangularComponent implements OnInit {
  angularpoints:any;
  constructor(private angularservice:AngularserviceService) {
    if(this.angularpoints==0){
      this.angularservice.pointsAngular.subscribe(d=>{
        this.angularpoints=d
      })
    }else{
      this.angularservice.pointsAngular.subscribe(d=>{
        this.angularpoints=0+d
      })
    };



  }

  ngOnInit(): void {
  }

}
