import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FormsModule } from '@angular/forms';
import { ContentTypePipe } from './content-type.pipe';
import { UnderlineDirective } from './underline.directive';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ContentListComponent,
    ContentCardComponent,
    ContentTypePipe,
    UnderlineDirective,
    MessagesComponent,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot([
          { path: 'content/:id', component: ContentDetailComponent },
          { path: 'content', component: ContentListComponent },
          { path: '**', component: NotFoundComponent }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
