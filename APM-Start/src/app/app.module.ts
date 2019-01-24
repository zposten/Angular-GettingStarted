import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component'
import {ProductListComponent} from './products/product-list.component'
import {ConvertCharToSpacePipe} from './util/convertCharToSpacePipe'
import {StarComponent} from './shared/star.component'
import {TimesPipe} from './util/timesPipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertCharToSpacePipe,
    TimesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
