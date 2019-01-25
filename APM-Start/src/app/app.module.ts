import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import {ProductListComponent} from './products/product-list.component'
import {ConvertCharToSpacePipe} from './util/convertCharToSpacePipe'
import {StarComponent} from './shared/star.component'
import {TimesPipe} from './util/timesPipe'
import {WelcomeComponent} from './home/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertCharToSpacePipe,
    TimesPipe,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome'},
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
