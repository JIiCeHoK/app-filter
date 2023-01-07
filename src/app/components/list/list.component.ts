import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { Iship } from '../../types/interfaces';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

    message$: Observable<any>;
    shipsData: Iship[] = [];
    loading: boolean = true;
    shipsData$: Observable<any>;

    constructor(private apiService: ApiService, private store: Store<any>) {
        this.shipsData$ = this.store.select('ships')
    }

    ngOnInit() {
        this.setShips()
    }

    setShips(): void {
        this.apiService.onInit().subscribe((res: any) => {
            this.loading = res.loading;
            this.shipsData = res.data.ships;
            this.store.dispatch({
                type: '[Ship] Get Ships Success',
                ships: res.data.ships
            })
        });
    }

}
