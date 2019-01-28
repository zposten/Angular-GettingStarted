import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import {WelcomeComponent} from './home/welcome.component'
import {ProductsModule} from './products/products.module'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome'},
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
