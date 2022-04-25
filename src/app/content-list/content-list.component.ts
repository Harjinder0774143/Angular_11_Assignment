import { MovieServiceService } from './../movie-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Movie } from '../../helper-files/movie';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modify-content-component/modify-content-component.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  movieCard = "movieCard";
  genres = ["Biography", "Mindset", "Fantasy"];
  enteredValueExist = false;
  enteredValueNotExist = false;



  // list of books with details
  movies:Movie[] = []


  constructor(private movieServiceService:MovieServiceService) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList()
  {
    return this.movieServiceService.getContentList()
    .subscribe(response => {
      console.log(response)
      this.movies = response
    } );
  }

  updateList(movies:any){
    console.log(movies)
    this.movies = movies;
  }


  searchAvailability(text:any){
    this.enteredValueExist = false;
    this.enteredValueNotExist = false;
  //   let value = this.gadgets.filter((a:any)=>{
  //     // return a.Name.toLowerCase().includes(text.toLowerCase());
  //   })
  //   console.log("value", value);
  //   value ? this.enteredValueExist = true : this.enteredValueNotExist = true;
  }

}
