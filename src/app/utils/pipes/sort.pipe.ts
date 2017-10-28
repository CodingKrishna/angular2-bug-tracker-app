import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item2 : any) : number
}

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{
	private getComparer(attrName : string ) : IComparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}
	private getDescending(comparer : IComparer) : IComparer{
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;
		}
	}
	transform(data : any[], attrName : string = 'id', isDescending : boolean = false){
		console.log('Sort transform triggered..!');
		let comparer = this.getComparer(attrName);
		if (isDescending)
			comparer = this.getDescending(comparer);
		return data.sort(comparer);
	}
}