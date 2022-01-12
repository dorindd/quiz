
import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import{GitService} from '../git.service';
import{HtmlService} from '../html.service';
import { CssserviceService } from '../cssservice.service';
import{JavascriptserviceService} from '../javascriptservice.service';
import { AngularserviceService } from '../angularservice.service';
@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CountdownComponent implements OnInit{
gitpoints:any;
htmlpoints:any;
csspoints:any;
jspoints:any;
angularpoints:any;
finish:any;
finish1:any;
finish2:any;
finish3:any;
finish4:any
quizf:boolean=false;
quizf1:boolean=false;
quizf2:boolean=false;
quizf3:boolean=false;
quizf4:boolean=false;
  constructor(private gitservice:GitService,private myhtmlservice:HtmlService,private cssservice:CssserviceService,private jsservice:JavascriptserviceService,private angularservice:AngularserviceService){

    if(this.gitpoints==0){
      this.gitservice.pointsGit.subscribe(d=>{
        this.gitpoints=d});
      }else{
        this.gitservice.pointsGit.subscribe((d) => {
          this.gitpoints = 0 + d;

        });

        };



if(this.htmlpoints==0){
this.myhtmlservice.pointsHtml.subscribe(d=>{
  this.htmlpoints=d});
}else{
  this.myhtmlservice.pointsHtml.subscribe(d=>{
    this.htmlpoints=0+d});


};

if(this.csspoints==0){
  this.cssservice.pointsCss.subscribe(d=>{
    this.csspoints=d
  })
}else{
  this.cssservice.pointsCss.subscribe(d=>{
    this.csspoints=0+d
  })
};


if(this.jspoints==0){
  this.jsservice.pointsJavascript.subscribe(d=>{
    this.jspoints=d
  })
}else{
  this.jsservice.pointsJavascript.subscribe(d=>{
    this.jspoints=0+d
  })
};


if(this.angularpoints==0){
  this.angularservice.pointsAngular.subscribe(d=>{
    this.angularpoints=d
  })
}else{
  this.angularservice.pointsAngular.subscribe(d=>{
    this.angularpoints=0+d
  })
};

this.gitservice.finishGit.subscribe(d=>{  //
this.finish=d;
if(this.finish>9){

  this.quizf=true;
}
});

this.myhtmlservice.finishHtml.subscribe(d=>{
  this.finish1=d;
  if(this.finish1>9){
    this.quizf1=true;
  }
  });

  this.cssservice.finishCss.subscribe(d=>{
    this.finish2=d;
    if(this.finish2>9){

      this.quizf2=true;
    }
    });


    this.jsservice.finishJavascript.subscribe(d=>{
      this.finish3=d;
      if(this.finish3>9){

        this.quizf3=true;
      }
      });

      this.angularservice.finishAngular.subscribe(d=>{
        this.finish4=d;
        if(this.finish4>9){

          this.quizf4=true;
        }
        });

}



  ngOnInit(): void {






}

}
