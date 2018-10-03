import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../shared/services/progress-bar.service';

@Component({
    templateUrl: './portal.component.html',
})
export class PortalComponent implements OnInit {

    constructor(public progressBarService: ProgressBarService) { }

    ngOnInit() {
    }
}
