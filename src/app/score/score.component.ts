import { Component, OnInit } from '@angular/core';
import {SharedataService} from '../sharedata.service';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  number:any


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

}