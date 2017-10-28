import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugStorageService } from './services/BugStorage.Service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'BugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];

	constructor(private bugStorage : BugStorageService){

	}

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}

	newBugAdded(bug : Bug){
		this.bugs = [...this.bugs, bug];
	}

	bugToggled(toggledBug : Bug) {
		this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}

	removeClosed(){
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index, 1);
			}
		}
		/*this.bugs = this.bugs.filter(function(bug){
			return !bug.isClosed;
		});*/
		//this.bugs = this.bugs.filter(bug => !bug.isClosed);

	}
}