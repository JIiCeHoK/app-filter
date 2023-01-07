import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Apollo, gql, QueryRef } from 'apollo-angular'
import { IappState, IconfigState, Iship } from './types/interfaces';
import { Store } from '@ngrx/store';
import { selectCurrentPage } from './store/selectors/config.selector';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    ships: Iship[] = [];
    error: any;
    limit: number = 5;
    page$: Observable<any>;
    page: number;

    constructor(private apollo: Apollo, store: Store<IappState>) {
        this.page$ = store.select(selectCurrentPage);
        this.page$.pipe(map((res: IappState) => this.page = res.config.currentPage)).subscribe();
    }

    onInit(): Observable<any> {
        return this.apollo
            .watchQuery({
                query: gql`
                    {
                    ships(limit: ${this.limit}, offset: ${this.limit * this.page - this.limit}) {
                        type
                        name
                        home_port
                        id
                    }
                    }
                    `
            })
            .valueChanges

    }

    getShip(id: string): Observable<any> {

        return this.apollo.watchQuery({
            query: gql`
                    {
  ship(id: "${id}") {
    name
    weight_kg
    year_built
    type
    home_port
    missions {
      name
    }
  }
}
                    `
        }).valueChanges
    }

    fetchMore() {

    }
}
