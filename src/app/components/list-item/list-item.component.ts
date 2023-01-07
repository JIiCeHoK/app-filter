import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {

    @Input() shipName: string;
    @Input() ship: {
        name: string;
        type: string;
        home_port: string;
        id: string
    }

    constructor() { }

    ngOnInit(): void {
    }

}
