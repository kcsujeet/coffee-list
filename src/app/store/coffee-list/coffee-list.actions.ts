import { Coffee } from '../../components/coffee/coffee.model';
import { createAction, props } from '@ngrx/store';

export const addCoffee = createAction(
    '[Coffee List] Add Coffee',
    props<{ coffee: Coffee }>()
);

export const removeCoffee = createAction(
    '[Coffee List] Remove Coffee',
    props<{ coffeeId: number }>()
);

export const setCoffeeList = createAction(
    '[Coffee List] Set Coffee List',
    props<{ coffeeList: Array<Coffee> }>()
);
