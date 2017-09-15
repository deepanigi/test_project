import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component2/my-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    
    MyComponentComponent,
    MyComponent2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
 {
      path: 'page1',
      component: MyComponentComponent
  },
  {
       path: 'page2',
       component: MyComponent2Component
   }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
