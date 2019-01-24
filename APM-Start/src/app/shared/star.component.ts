import {OnChanges, SimpleChanges, Component, Input} from '@angular/core'

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  public readonly maxStars = 5
  public readonly fullWidth = 15 * this.maxStars

  @Input() public rating: number
  public starsWidth = this.fullWidth

  public ngOnChanges(changes: SimpleChanges) {
    this.starsWidth = (this.rating / this.maxStars) * this.fullWidth
  }
}
