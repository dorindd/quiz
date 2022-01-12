import { Component, OnInit } from '@angular/core';
import{GitService} from '../git.service';
@Component({
  selector: 'scoregit',
  templateUrl: './scoregit.component.html',
  styleUrls: ['./scoregit.component.css']
})
export class ScoregitComponent implements OnInit {
  gitpoints:any
  constructor(private gitservice:GitService) {
    if(this.gitpoints==0){
      this.gitservice.pointsGit.subscribe(d=>{
        this.gitpoints=d
      })
    }else{
      this.gitservice.pointsGit.subscribe(d=>{
        this.gitpoints=0+d
      })



    }

   }

  ngOnInit(): void {
  }

}
