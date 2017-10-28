import { Component, Output, EventEmitter } from '@angular/core';
import { BugStorageService } from '../services/BugStorage.Service';
import { Bug } from '../models/Bug';

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

	constructor(private bugStorage : BugStorageService){

	}
	add(bugName : string){
		let newBug : Bug = this.bugStorage.addNew(bugName);
		//this.bugs.push(newBug);
		this.onNewBug.emit(newBug);
	}
}