import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ButtonsComponent } from './buttons/buttons.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
=======
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ButtonsComponent } from './buttons/buttons.component';
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ButtonsComponent,
    SkillSetComponent
=======
    SkillSetComponent,
    ButtonsComponent
>>>>>>> 9fd9381bf8a2523e0db6d36f797a4b9ccc94cf53
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
