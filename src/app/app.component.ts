import { Movie } from '../helper-files/movie';
import { MovieServiceService } from './movie-service.service';
import { ApplicationRef, Component,OnInit } from '@angular/core';
import { LogUpdateService } from './log-update.service';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { concat, first, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'color';
  searach = 1;
  findElement:Movie= <Movie>{}
  searchBar=""
  error=""


  constructor(private movieServiceService:MovieServiceService, private logUpdateService: LogUpdateService,
    private appRef: ApplicationRef,private updates: SwUpdate) { // check the service worker for updates
      this.updates.checkForUpdate();}
  
  ngOnInit():void{
    
    if (navigator.serviceWorker) { // browser supports service worker
      this.logUpdateService.init();

      const appIsStable$ = this.appRef.isStable.pipe(
        first(isThisStableYet => isThisStableYet === true));
      // appIsStable$.subscribe(() => { });
      const everyHalfHour$ = interval((1 * 60 * 60 * 1000) / 2);
      const everyHalfHourOnceAppIsStable$ =
        concat(appIsStable$, everyHalfHour$);
      everyHalfHourOnceAppIsStable$.subscribe(
        () => this.updates.checkForUpdate());
    }
    else {
      //browser doesn't support service worker yet :(
    }
     this.movieServiceService.getContent(this.searach).subscribe(response=>this.findElement = response);
  }



  search(value: string, e:any)
  {
    this.error="";
    if(!Number.isNaN(value))
    {
      this.searach = parseInt(value)
      this.movieServiceService.getContent(this.searach)
    .subscribe(response=>this.findElement = response,
      error=>{
        this.error="Somting Wen Wrong";
      });
    }
    else
    {
      this.error="Enter Proper Number";
    }
  }
}
