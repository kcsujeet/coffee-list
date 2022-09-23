import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoffeeListService } from './coffee-list.service';

@Injectable()
export class CoffeeListEffects {
    constructor(
        private actions$: Actions,
        private coffeeListService: CoffeeListService
    ) {}

    loadCoffeeList$ = createEffect(() => this.actions$.pipe(
        ofType('[Coffee List] Fetch Coffee List'),
        mergeMap(() => this.coffeeListService.fetchCoffeeList()
            .pipe(
                map(coffeeList => ({ type: '[Coffee List] Set Coffee List', coffeeList })),
                catchError(() => EMPTY)
            ))
        )
    );

}
