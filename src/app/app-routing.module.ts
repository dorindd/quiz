import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CssComponent } from './css/css.component';
import { GitComponent } from './git/git.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';




const routes: Routes = [
  {path:"",component:CountdownComponent,pathMatch:'full'},
  {path:"git",component:GitComponent},
  {path:"html",component:HtmlComponent},
  {path:"home",component:CountdownComponent},
  {path:"css",component:CssComponent},
  {path:"javascript",component:JavascriptComponent},
  {path:"angular",component:AngularComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
