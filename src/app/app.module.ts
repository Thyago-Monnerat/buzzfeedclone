import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CardOptionComponent } from './components/card-option/card-option.component';
import { EndGameComponent } from './components/end-game/end-game.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, QuizComponent, CardOptionComponent, EndGameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
