import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() getGadget?: any;
  constructor() {}

  ngOnInit(): void {
    //console.log(this.getGadget);
  }

  enteredValueExist = false;
  enteredValueNotExist = false;

  searchAvailability(text: any) {
    this.enteredValueExist = false;
    this.enteredValueNotExist = false;
    console.log('input value', text);
    // let value = this.gadgets.filter((a:any)=>{
    //   // return a.Name.toLowerCase().includes(text.toLowerCase());
    // })
    // console.log("value", value);
    // value ? this.enteredValueExist = true : this.enteredValueNotExist = true;
  }


  getMovieDetails(getGadget:any){
    console.log(getGadget)
    
  }

}
