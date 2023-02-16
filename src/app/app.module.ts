import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { PromptInputFieldComponent } from './prompt-input-field/prompt-input-field.component';
import { LogoComponent } from './logo/logo.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConversationsComponent,
    PromptInputFieldComponent,
    LogoComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
