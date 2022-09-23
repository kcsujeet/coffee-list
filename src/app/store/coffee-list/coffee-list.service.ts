import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coffee } from '../../components/coffee/coffee.model';


@Injectable({ providedIn: 'root' })
export class CoffeeListService {
    constructor(private http: HttpClient) {}

    fetchCoffeeList(): Observable<Array<Coffee>> {
        return this.http.get<Coffee[]>(
                'https://random-data-api.com/api/coffee/random_coffee/?size=50'
            ).pipe(
                map(results => results.sort((a, b) => a.blend_name > b.blend_name ? 1 : (a.blend_name < b.blend_name ? -1 : 0)))
            );
    }
}
