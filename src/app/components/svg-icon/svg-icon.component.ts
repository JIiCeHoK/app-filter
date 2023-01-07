import { Component, Input, } from '@angular/core';

@Component({
    selector: 'app-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrls: ['./svg-icon.component.less'],
})
export class SvgIconComponent {
    @Input() iconType: string;
    @Input() rotate: number;
}
