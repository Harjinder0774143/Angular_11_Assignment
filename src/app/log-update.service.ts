import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate, private messageService: MessageService, private snackbar: MatSnackBar) {
    if (updates.isEnabled) {interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate()
        .then(() => console.log('checking for updates')));
    }
   }

   public init() {
    this.updates.versionUpdates.subscribe(event => {
      console.log("A version update potentially happened", event);
      switch (event.type) {
        case 'VERSION_DETECTED':
          this.messageService.add(`Downloading new app version: ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          this.messageService.add(`Current app version: ${event.currentVersion.hash}`);
          this.messageService.add(`New app version ready for use: ${event.latestVersion.hash}`);
          let snackBarRef = this.snackbar.open("An update is ready!", "Update App");
          snackBarRef.onAction().subscribe(() => {
            this.updates.activateUpdate().then((someBoolean) => {
              console.log(`The promise returned a boolean value of: ${someBoolean}`)
              document.location.reload();
            });
          });
          break;
      }
    });
  }

  
    private promptUser(): void {
      console.log('updating to new version');
      this.updates.versionUpdates.subscribe(event => {
        console.log(event)
        switch (event.type) {
        case 'VERSION_DETECTED':
        console.log(`Downloading new app version:${event.version.hash}`);    
        break;
        case 'VERSION_READY':
          this.updates.activateUpdate().then(() =>document.location.reload());
        console.log(`Current app version:${event.currentVersion.hash}`);    
        console.log(`New app version ready for use:${event.latestVersion.hash}`);    
        break;
        } 
      });  
    }

    public checkForUpdates(): void {
      this.updates.versionUpdates.subscribe(event => this.promptUser());
    }



}
