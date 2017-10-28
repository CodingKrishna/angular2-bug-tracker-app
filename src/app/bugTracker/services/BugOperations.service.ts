import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(id : number, bugName : string) : Bug{
		let newBug : Bug = {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}

	toggle(bug : Bug) : Bug {
		return { ...bug, isClosed : !bug.isClosed};
	}
}