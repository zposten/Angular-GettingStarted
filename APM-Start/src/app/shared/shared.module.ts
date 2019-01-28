import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {StarComponent} from './components/star.component'
import {ConvertCharToSpacePipe} from './pipes/convertCharToSpacePipe'
import {TimesPipe} from './pipes/timesPipe'

@NgModule({
  declarations: [
    StarComponent,
    ConvertCharToSpacePipe,
    TimesPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,

    StarComponent,
    ConvertCharToSpacePipe,
    TimesPipe,
  ],
})
export class SharedModule { }
