import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";

@Injectable()
export class UiMessageService {
    private uiMessagesArray: string[] = [];
    private uiMessages: Subject<string[]> = new Subject<string[]>();
    private uiMessageStreams: Observable<string[]> = this.uiMessages.asObservable();


    public addMessage(uiMessage: string): void {
        let message: number = this.contains(uiMessage);
        if (message === -1) {
            this.uiMessagesArray.push(uiMessage);
            this.publishMessage(this.uiMessagesArray);
        }

    }
    private contains(message: string): any {
        if (this.uiMessagesArray) {
            for (let index: number = 0; index < this.uiMessagesArray.length; index++) {
                if (this.uiMessagesArray[index] === message) {
                    return index;
                }
            }
        }
        return -1;
    }

    private publishMessage(uiMessage: string[]): any {
        this.uiMessages.next(uiMessage);
    }

    public addUiMessages(): Observable<string[]> {
        return this.uiMessageStreams;
    }

    public resetUiMessages(message: string): void {
        for (let index: number = 0; index < this.uiMessagesArray.length; index++) {
            if (this.uiMessagesArray[index] === message) {
                this.uiMessagesArray.splice(index, 1);
            }
        }
        this.publishMessage(this.uiMessagesArray);
    }

    public resetAllUiMessages(): void {
        this.uiMessagesArray = [];
        this.publishMessage(this.uiMessagesArray);
    }
}