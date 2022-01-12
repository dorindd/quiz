import { Component, OnInit } from '@angular/core';
import{JavascriptserviceService} from '../javascriptservice.service';
@Component({
  selector: 'scorejavascript',
  templateUrl: './scorejavascript.component.html',
  styleUrls: ['./scorejavascript.component.css']
})
export class ScorejavascriptComponent implements OnInit {
  jspoints:any;
  constructor(private jsservice:JavascriptserviceService) {

    if(this.jspoints==0){
      this.jsservice.pointsJavascript.subscribe(d=>{
        this.jspoints=d
      })
    }else{
      this.jsservice.pointsJavascript.subscribe(d=>{
        this.jspoints=0+d
      })
    };

  }

  ngOnInit(): void {
  }

}
