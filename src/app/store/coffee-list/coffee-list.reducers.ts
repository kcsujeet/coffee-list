import { createReducer, on } from '@ngrx/store';
import { Coffee } from '../../components/coffee/coffee.model';
import { setCoffeeList, removeCoffee, addCoffee } from './coffee-list.actions';

export const initialState: ReadonlyArray<Coffee> = [];

export const coffeeListReducer = createReducer(
    initialState,
    on(setCoffeeList, (state, { coffeeList }) => coffeeList),
    on(addCoffee, (state, { coffee }) => {
        if (state.findIndex((item)=> item.id == coffee.id) > -1) return state;
        return [...state, coffee];
    }),
    on(removeCoffee, (state, { coffeeId }) => state.filter((coffee) => coffee.id !== coffeeId))
);
