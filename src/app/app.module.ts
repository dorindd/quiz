import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownComponent } from './countdown/countdown.component';
import { HtmlComponent } from './html/html.component';
import { ScoreComponent } from './score/score.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbartwoComponent } from './navbartwo/navbartwo.component';
import { TextComponent } from './text/text.component';
import { ScoregitComponent } from './scoregit/scoregit.component';
import { ScorehtmlComponent } from './scorehtml/scorehtml.component';
import { ScorecssComponent } from './scorecss/scorecss.component';
import { ScorejavascriptComponent } from './scorejavascript/scorejavascript.component';
import { ScoreangularComponent } from './scoreangular/scoreangular.component';
import { MinutePipe } from './minute.pipe';



@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    CountdownComponent,
    HtmlComponent,
    ScoreComponent,
    CssComponent,
    JavascriptComponent,
    AngularComponent,
    NavbarComponent,
    NavbartwoComponent,
    TextComponent,
    ScoregitComponent,
    ScorehtmlComponent,
    ScorecssComponent,
    ScorejavascriptComponent,
    ScoreangularComponent,
    MinutePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
