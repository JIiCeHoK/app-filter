import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentPage } from '../../store/selectors/config.selector';
import { IappState } from '../../types/interfaces';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {

    page$: Observable<any>;

    constructor(private store: Store<IappState>) {
        this.page$ = store.select(selectCurrentPage)
        console.log(this.page$);

    }

    ngOnInit(): void {
    }

}
