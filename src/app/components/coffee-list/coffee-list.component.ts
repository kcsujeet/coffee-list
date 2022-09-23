import { selectCoffeeList } from '../../store/coffee-list/coffee-list.selectors';
import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee/coffee.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
})
export class CoffeeListComponent implements OnInit {
  coffeeList: Array<Coffee> = []
  page: number = 1
  pageSize: number = 10
  collectionSize: number = 50
  searchString: string = ''
  loading: boolean = true

  constructor (
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[Coffee List] Fetch Coffee List' })
    this.store.select(selectCoffeeList).subscribe((items) => {
      if(items?.length > 0) {
        this.coffeeList = items
        this.loading = false
      }
    });
  }

  get filteredCoffeeList():Array<Coffee> {
    if(this.coffeeList?.length === 0 || this.searchString?.length === 0) return this.coffeeList;
    return this.coffeeList?.filter(c => c?.blend_name?.toLocaleLowerCase().includes(this.searchString))
  }

}
