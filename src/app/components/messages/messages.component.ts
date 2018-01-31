import { MessageService } from './../../service/message/message.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, AfterViewChecked {

    constructor(public messageService: MessageService) { }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        setTimeout(() => {
            $('#app-content').show();
            $('.loading').hide();
        }, 10000);
    }

}
