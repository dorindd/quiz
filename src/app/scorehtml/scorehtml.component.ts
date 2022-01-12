import { Component, OnInit } from '@angular/core';
import{HtmlService} from '../html.service';
@Component({
  selector: 'scorehtml',
  templateUrl: './scorehtml.component.html',
  styleUrls: ['./scorehtml.component.css']
})
export class ScorehtmlComponent implements OnInit {
  htmlpoints:any;
  constructor(private myhtmlservice:HtmlService) {
    if(this.htmlpoints==0){
      this.myhtmlservice.pointsHtml.subscribe(d=>{
        this.htmlpoints=d});
      }else{
        this.myhtmlservice.pointsHtml.subscribe(d=>{
          this.htmlpoints=0+d});


      };


  }

  ngOnInit(): void {
  }

}
