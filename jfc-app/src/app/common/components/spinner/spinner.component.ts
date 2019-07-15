import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
@Input()
public showLoadingIcon = false;

}