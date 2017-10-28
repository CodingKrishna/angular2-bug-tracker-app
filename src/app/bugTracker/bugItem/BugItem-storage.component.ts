import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Bug } from '../models/Bug';
import { BugStorageService } from '../services/BugStorage.Service';

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

	constructor(private bugStorage : BugStorageService){

	}
	toggle(bugToToggle : Bug) {
		let toggledBug : Bug = this.bugStorage.toggle(bugToToggle);
		this.onToggle.emit(toggledBug);
	}
}