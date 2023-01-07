import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, Observable, map } from 'rxjs'
import { ApiService } from '../../api.service'

interface Idata {
    data: {
        ships: any[];
    };
    loading: boolean;
    networkStatus: number;
};

@Component({
    selector: 'test',
    templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {

    list$: Observable<Idata> | null = null;
    test: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private apiService: ApiService) { };

    ngOnInit() {
        // this.list$ = this.apiService.onInit(5).pipe(map(result => {
        //     //const ships: any[] = result.data.ships
        //     const resultData = result;
        //     this.test.next(resultData);
        //     return resultData;
        // }))
    };


}

