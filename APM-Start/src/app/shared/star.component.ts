import { Component, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
