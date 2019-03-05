import { Injectable } from '@angular/core';
import { CONTENT} from '../contentDb';
import {Observable, of} from 'rxjs';
import {Content} from '../content-card/content-list-helper';
import { MessageService} from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

    constructor(private messageService: MessageService) { }
    getContentObs(): Observable<Content[]>{
        this.messageService.add('Content retrieved!');
        return of (CONTENT);
    }
}

