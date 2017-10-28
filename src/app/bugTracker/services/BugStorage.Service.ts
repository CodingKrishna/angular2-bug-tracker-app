import { Bug } from '../models/Bug';
import { BugOperationsService } from './BugOperations.service';
import { Injectable } from '@angular/core';


@Injectable()
export class BugStorageService{
	storage : Storage = window.localStorage;
	private currentBugId : number = 0;

	constructor(private bugOperations : BugOperationsService){

	}

	getAll() : Bug[] {
		let result : Bug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				data = this.storage.getItem(key),
				bug = JSON.parse(data);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}

	private save(bug : Bug) : void{
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	addNew(bugName : string) : Bug {
		let newBug : Bug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	toggle (bug : Bug) : Bug {
		let toggledBug = this.bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : Bug) : void {
		this.storage.removeItem(bug.id.toString());
	}
}