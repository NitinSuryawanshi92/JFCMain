import { Component, Input } from '@angular/core';
import { UiMessageService } from './ui-message.service';

@Component({
    selector: 'ui-message',
    templateUrl: './ui-message.component.html',
})
export class UiMessageComponent {
    public uiMessagesToBeDisplay: string[];
    @Input()
    public uiSuccessMessageFlag: boolean;
    constructor(private uiMessageService: UiMessageService) {

    }
    public ngOnInit(): void {
        this.uiMessageService.addUiMessages().subscribe(
            (uiMessageArray: string[]) => {
                this.uiMessagesToBeDisplay = uiMessageArray;
            });

    }
}