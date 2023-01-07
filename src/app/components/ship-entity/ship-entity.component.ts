import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { selectShip } from '../../store/selectors/ship.selector';
import { Iship } from '../../types/interfaces';

@Component({
    selector: 'app-ship-entity',
    templateUrl: './ship-entity.component.html',
    styleUrls: ['./ship-entity.component.less']
})
export class ShipEntityComponent implements OnInit, OnDestroy {
    id: string;
    ship$: Observable<Iship>;

    constructor(route: ActivatedRoute, private store: Store<any>, private apiService: ApiService) {
        this.id = route.snapshot.paramMap.get('id');
        this.ship$ = this.store.select(selectShip);
    }

    ngOnInit(): void {
        this.setShip()
    }

    setShip(): void {
        this.apiService.getShip(this.id).subscribe((res: any) => {
            this.store.dispatch({
                type: '[Ship] Set Ship Success',
                ship: res.data.ship
            })
        });
    }

    ngOnDestroy(): void {
        this.ship$ = null
    }

}
