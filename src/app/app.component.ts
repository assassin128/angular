import { Component, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
    title = 'Tour of Heroes';

    ngAfterViewChecked() {
        $('#app-content').show();
        $('.loading').hide();
    }
}
