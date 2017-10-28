import { Component, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugServerService } from '../services/BugServer.service';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="add(newBugName)">
		</section>
	`
})
export class BugEditComponent{

	@Output()
	onNewBug : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugServer : BugServerService){

	}
	add(bugName : string){
		this.bugServer
			.addNew(bugName)
			.subscribe(newBug => this.onNewBug.emit(newBug));
		;
	}
}