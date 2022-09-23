import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Coffee } from 'src/app/components/coffee/coffee.model';

export interface AppSate {
    coffeeList: Array<Coffee>
}

export const selectCoffeeList = createFeatureSelector<Array<Coffee>>('coffeeList');
export const selectCoffee = (coffeeId: number) => createSelector (
    selectCoffeeList,
    (coffeeList: Array<Coffee>) => coffeeList.find( c => c.id === coffeeId) || null
)
