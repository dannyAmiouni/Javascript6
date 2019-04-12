import { Injectable } from '@angular/core';
import { CONTENT} from '../contentDb';
import {Observable, of} from 'rxjs';
import {Content} from '../content-card/content-list-helper';
import { MessageService} from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

    constructor(private messageService: MessageService) {
    }

    getContentObs(): Observable<Content[]> {
        this.messageService.add('Content retrieved!');
        return of(CONTENT);
    }

    addContent(content: Content): Observable<Content> {
        let thePromise = new Promise((success, fail)) => {
            let testPass = true;
            if (testPass){
                success(this.messageService.add('Content was added'));
            }
            else{
                fail(this.messageService.add('Content failed to be added'))
            }
            thePromise.then(successResult => console.log(successResult))
                .then(failResult => console.log(failResult));
        }
        return this.http.post<Content>("api/content", content, this.httpOptions);
    }


}