import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Bug } from '../models/Bug';
import { BugServerService } from '../services/BugServer.service';


@Component({
	selector : 'bug-item',
	template : `
		<li >
			<span class="bugname" [ngClass]="{closed : bug.isClosed}" (click)="toggle(bug)">
				{{bug.name | trimText:40}}
			</span>
			<div class="datetime">[{{bug.createdAt | elapsed}}]</div>
		</li>
	`
})
export class BugItemComponent{

	@Output()
	onToggle : EventEmitter<Bug> = new EventEmitter<Bug>();

	@Input()
	bug : Bug;

	constructor(private bugServer : BugServerService){

	}
	toggle(bugToToggle : Bug) {
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.onToggle.emit(toggledBug));
		
	}
}