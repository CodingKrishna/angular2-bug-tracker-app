import { NgModule } from '@angular/core';
import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

const ALL_PIPES =  [
	TrimTextPipe,
    SortPipe,
    ElapsedPipe,
];

const ALL_COMPONENTS = [];
@NgModule({
	declarations : [...ALL_PIPES, ...ALL_COMPONENTS],
	imports : [],
	exports : [...ALL_PIPES, ...ALL_COMPONENTS],
	providers : []
})
export class UtilsModule{

}