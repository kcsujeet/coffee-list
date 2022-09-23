import { Coffee } from './coffee.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeComponent implements OnInit {

  @Input() coffee: Coffee | null = null;
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
