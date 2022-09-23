import { selectCoffee } from './../../store/coffee-list/coffee-list.selectors';
import { Store } from '@ngrx/store';
import { Coffee } from './../coffee/coffee.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeDetailComponent implements OnInit {

  coffee: Coffee | null = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    let coffeeId =  +this.route.snapshot.params['id'];
    this.store.select(selectCoffee(coffeeId)).subscribe(coffee => this.coffee = coffee)
  }

}
