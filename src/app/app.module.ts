import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/BugTracker.component';
import { BugStatsComponent } from './bugTracker/bugStats/BugStats.component';
import { BugEditComponent } from './bugTracker/bugEdit/BugEdit.component';
import { BugItemComponent } from './bugTracker/bugItem/BugItem.component';

import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStorageService } from './bugTracker/services/BugStorage.Service';
import { BugServerService } from './bugTracker/services/BugServer.service';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    BugItemComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule, FormsModule, UtilsModule, HttpModule
  ],
  providers: [BugOperationsService, BugStorageService, BugServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
