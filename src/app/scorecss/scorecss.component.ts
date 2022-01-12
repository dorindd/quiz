import { Component, OnInit } from '@angular/core';
import { CssserviceService } from '../cssservice.service';
@Component({
  selector: 'scorecss',
  templateUrl: './scorecss.component.html',
  styleUrls: ['./scorecss.component.css']
})
export class ScorecssComponent implements OnInit {
  csspoints:any;
  constructor(private cssservice:CssserviceService) {
    if(this.csspoints==0){
      this.cssservice.pointsCss.subscribe(d=>{
        this.csspoints=d
      })
    }else{
      this.cssservice.pointsCss.subscribe(d=>{
        this.csspoints=0+d
      })
    };


   }

  ngOnInit(): void {
  }

}
